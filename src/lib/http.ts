
import { createHttp } from "./request";
import type { PluginCallbackParams } from "./request";
import { message as AntMessage, Spin } from 'antd';
import { createRoot, Root } from 'react-dom/client';
import React from 'react';

interface ExtendRequestConfig {
  flat?: boolean;
  loading?: boolean;
  showErrorMessage?: boolean;
  showSuccessMessage?: boolean
}

declare global {
  // eslint-disable-next-line @typescript-eslint/no-empty-object-type
  interface RequestConfigExt extends ExtendRequestConfig { }
}

function flatResponsePlugin() {
  return ({ config, onResponse }: PluginCallbackParams) => {
    const { flat } = config;
    if (flat !== false) {
      onResponse((response) => {
        return response?.data || response;
      });
    }
  };
}


const { request, http } = createHttp({
  timeout: 60000,
  baseURL: process.env.NODE_ENV === 'development' ? '/api' : ''
});

request.use(flatResponsePlugin());

// 全局 Loading 管理
let loadingCount = 0;
let loadingRoot: Root | null = null;
let loadingContainer: HTMLDivElement | null = null;

function showLoading() {
  if (loadingCount === 0) {
    loadingContainer = document.createElement('div');
    loadingContainer.style.cssText = 'position:fixed;top:0;left:0;right:0;bottom:0;display:flex;align-items:center;justify-content:center;background:rgba(255,255,255,0.45);z-index:9999;';
    document.body.appendChild(loadingContainer);
    loadingRoot = createRoot(loadingContainer);
    loadingRoot.render(React.createElement(Spin, { size: 'large', description: '加载中...' }));
  }
  loadingCount++;
}

function hideLoading() {
  loadingCount = Math.max(0, loadingCount - 1);
  if (loadingCount === 0 && loadingRoot && loadingContainer) {
    loadingRoot.unmount();
    document.body.removeChild(loadingContainer);
    loadingRoot = null;
    loadingContainer = null;
  }
}

const plugin = () => {
  return ({
    config,
    onResponse,
    afterRequest,
  }: PluginCallbackParams) => {
    const { showSuccessMessage, showErrorMessage, loading } = config;

    if (loading !== false) {
      showLoading();
    }

    onResponse(
      (response) => {
        if (loading !== false) {
          hideLoading();
        }
        const { code, message } = response;

        if (code !== "SUCCESS") {
          if (showErrorMessage !== false) AntMessage.error(message || "操作失败");

          return Promise.reject(response);
        }
        if (showSuccessMessage === true) {
          AntMessage.success(message || "操作成功")
        }
        return Promise.resolve(response.data);
      },
      (error) => {
        if (loading !== false) {
          hideLoading();
        }
        if (error.code === "ERR_CANCELED") {
          return Promise.reject(error);
        }

        AntMessage.error(error?.response?.data?.message ?? error.code);

        return Promise.reject(error);
      }
    );
    afterRequest(() => {
      // 请求发出后的回调
    });
  };
};

request.use(plugin());

export default http;
