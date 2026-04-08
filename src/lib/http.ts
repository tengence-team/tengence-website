
import { createHttp } from "./request";
import type { PluginCallbackParams } from "./request";
import { message } from 'antd';

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

// let instance: any;

const plugin = () => {
  return ({
    config,
    onResponse,
    afterRequest,
  }: PluginCallbackParams) => {
    const { showSuccessMessage, showErrorMessage } = config;
    onResponse(
      (response) => {
        // if (loading && instance) {
        //   instance.close();
        // }
        // // const { resetUserInfo } = useUserStore();
        const { code, message } = response;

        if (code !== "SUCCESS") {
          showErrorMessage !== false && message.error(message || "操作失败");

          return Promise.reject(response);
        }
        if (showSuccessMessage === true) {
          message.success(message || "操作成功")
        }
        return Promise.resolve(response.data);
      },
      (error) => {
        if (error.code === "ERR_CANCELED") {
          return Promise.reject(error);
        }

        // if (loading && instance) {
        //   instance.close();
        // }

        message.error(error?.response?.data?.message ?? error.code);

        return Promise.reject(error);
      }
    );
    afterRequest(() => {
      // if (loading) {
      //   // instance = ElLoading.service({ fullscreen: true });
      // }
    });
  };
};

request.use(plugin());

export default http;
