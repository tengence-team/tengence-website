"use client";

import { cn } from "@/lib/utils";
import localFont from "next/font/local";
import Image from "next/image";
import * as Api from "@/api";

import { Button, Form, Input, Select, Space } from "antd";

const { Option } = Select;

const sourceHanSerif = localFont({
  src: [
    {
      path: "../../fonts/SourceHanSerifCN-SemiBold.otf",
      weight: "600",
      style: "normal",
    },
  ],
  variable: "--font-source-han-serif",
  display: "swap",
  preload: true,
});

export default function ContractUsPage() {
  const [form] = Form.useForm();

  const onFinish = async (values: any) => {
    console.log("Received values of form: ", values);
    await Api.submitCustomerContractData(
      {
        customerName: values.name,
        phone: `+${values.prefix}-${values.phone}`,
        email: values.email,
        companyName: values.email,
        industry: values.industryType,
        demandDescription: values.intro,
      },
      { showSuccessMessage: true, loading: true }
    );
    form.resetFields();
  };

  const prefixSelector = (
    <Form.Item name="prefix" noStyle>
      <Select disabled style={{ width: 70 }}>
        <Option value="86">+86</Option>
      </Select>
    </Form.Item>
  );

  return (
    <div className="max-w-360 mx-auto  px-[12.5px] pt-27.5 mb-12.5 grid grid-cols-2 gap-10">
      <div className="flex flex-col justify-between">
        <div className="w-full">
          <h1
            className={cn(
              "text-[44px] font-semibold text-black",
              sourceHanSerif.className
            )}
          >
            与我们的团队沟通，
            <p>
              了解 <span className="text-primary">通智云</span> 如何满足你的需求
            </p>
          </h1>

          <div className="text-[#555E67] text-[16px] flex items-center mt-8">
            <Image
              src="/icons/check-circle-primary.svg"
              width={18}
              height={18}
              alt="讨论最符合您业务目标的解决方案"
            />
            <p className="pl-2">讨论最符合您业务目标的解决方案</p>
          </div>

          <div className="text-[#555E67] text-[16px] flex items-center mt-2">
            <Image
              src="/icons/check-circle-primary.svg"
              width={18}
              height={18}
              alt="获得专属定制报价"
            />
            <p className="pl-2">获得专属定制报价</p>
          </div>

          <div className="text-[#555E67] text-[16px] flex items-center mt-2">
            <Image
              src="/icons/check-circle-primary.svg"
              width={18}
              height={18}
              alt="了解如何优化跨团队协作流程”"
            />
            <p className="pl-2">了解如何优化跨团队协作流程”</p>
          </div>
        </div>
        <div className="w-full bg-[#ebefff80] rounded-[20px] p-7.5 mt-10">
          <h2
            className={cn(
              "text-[#242430] text-[20px] font-semibold",
              sourceHanSerif.className
            )}
          >
            随时获得我们的帮助
          </h2>

          <div className="flex items-center text-[#373850] text-[16px] font-medium mt-7">
            <Image
              src="/icons/phone-call.svg"
              width={20}
              height={20}
              alt="合作电话"
            />
            <p className="pl-4 pr-6">合作电话</p>
            <p className="relative after:absolute after:top-1.75 after:-right-3 after:content-[''] after:h-3 after:w-px after:bg-white">
              +86-13924590513
            </p>
            <p className="pl-6">+852-53009078</p>
          </div>
          <div className="flex items-center text-[#373850] text-[16px] font-medium mt-4">
            <Image
              src="/icons/phone-call.svg"
              width={20}
              height={20}
              alt="合作邮箱"
            />
            <p className="pl-4 pr-6">合作邮箱</p>
            <p>bd@tengence.com</p>
          </div>
          <div className="flex items-center text-[#373850] text-[16px] font-medium mt-4">
            <Image
              src="/icons/phone-call.svg"
              width={20}
              height={20}
              alt="监督我们"
            />
            <p className="pl-4 pr-6">监督我们</p>
            <p>ceo@tengence.com</p>
          </div>
        </div>
      </div>
      <div className="shadow-card-border p-10 rounded-[20px]">
        <Form
          layout="vertical"
          form={form}
          name="contract"
          onFinish={onFinish}
          initialValues={{
            residence: ["zhejiang", "hangzhou", "xihu"],
            prefix: "86",
          }}
          scrollToFirstError
        >
          <Form.Item
            name="name"
            label={
              <div className="text-[14px] font-medium">
                <span className="text-[#51526D]">怎么称呼您</span>
                <span className="text-[#FB595C] pl-1">*</span>
              </div>
            }
            rules={[{ required: true, message: "请输入您的称呼" }]}
          >
            <Input className="h-9" placeholder="请输入您的称呼" />
          </Form.Item>

          <Form.Item
            name="phone"
            label={
              <div className="text-[14px] font-medium">
                <span className="text-[#51526D]">电话号码</span>
                <span className="text-[#FB595C] pl-1">*</span>
              </div>
            }
            rules={[{ required: true, message: "请输入您的电话号码" }]}
          >
            <Space.Compact style={{ width: "100%" }}>
              {prefixSelector}
              <Input className="h-9" placeholder="您的手机号" />
            </Space.Compact>
          </Form.Item>

          <Form.Item
            name="email"
            label={
              <div className="text-[14px] font-medium">
                <span className="text-[#51526D]">电子邮箱</span>
              </div>
            }
            rules={[
              {
                type: "email",
                message: "请输入正确的邮箱地址",
              },
            ]}
          >
            <Input className="h-9" placeholder="请输入您的邮箱地址" />
          </Form.Item>

          <Form.Item
            name="company"
            label={
              <div className="text-[14px] font-medium">
                <span className="text-[#51526D]">公司</span>
              </div>
            }
          >
            <Input className="h-9" placeholder="请输入您的公司名" />
          </Form.Item>

          <Form.Item
            name="industryType"
            label={
              <div className="text-[14px] font-medium">
                <span className="text-[#51526D]">所属行业</span>
              </div>
            }
          >
            <Select className="h-9" placeholder="选择您属于的行业">
              <Select.Option value="GENERAL">通用行业</Select.Option>
              <Select.Option value="E_COMMERCE">电商行业</Select.Option>
              <Select.Option value="CONTENT_COMMUNITY">
                内容社区行业
              </Select.Option>
            </Select>
          </Form.Item>

          <Form.Item
            name="intro"
            label={
              <div className="text-[14px] font-medium">
                <span className="text-[#51526D]">我们能为您做些什么？</span>
              </div>
            }
          >
            <Input.TextArea placeholder="请简单阐述您的需求" />
          </Form.Item>

          <Form.Item>
            <Button
              className="w-full h-10! bg-primary! text-[16px]!"
              type="primary"
              htmlType="submit"
            >
              提交
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
}
