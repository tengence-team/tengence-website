import Link from "next/link";
import Image from "next/image";
import vxIcon from "@/assets/icons/vx.svg";
import vxGroupIcon from "@/assets/icons/vx-group.svg";
import dingTalkIcon from "@/assets/icons/ding-talk.svg";
import feishuIcon from "@/assets/icons/feishu.svg";
import icpImg from "@/assets/images/icp.png";
import { Popover } from "antd";

import vxQrcode from "@/assets/images/vx.png";
import feishuQrcode from "@/assets/images/feishu.png";
import vxGroupQrcode from "@/assets/images/vx-group.png";
import dingTalkQrcode from "@/assets/images/ding-talk.png";

const content = (img: typeof vxQrcode, title: string) => {
  return (
    <div className="flex flex-col items-center justify-center">
      <Image src={img} alt="二维码" width={141} height={141} />
      <p className="text-center text-sm mt-2">{title}</p>
    </div>
  );
};

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-white">
      <div className="max-w-360 pt-10 px-6 pb-6 mx-auto">
        <div className="flex items-center justify-between">
          <div className="flex items-end gap-20">
            <div className="flex items-center">
              <Link href="/" className="flex items-center space-x-1.5">
                <Image
                  src="/logo-white.svg"
                  alt="通智云"
                  width={36}
                  height={36}
                />
                <Image
                  src="/company-name-white.svg"
                  alt="通智云"
                  width={88}
                  height={28}
                />
              </Link>
            </div>

            <nav className="flex gap-6">
              <Link href="/tengence-search" className="text-base font-medium">
                通智搜索
              </Link>
              <Link href="/about-us" className="text-base font-medium">
                关于我们
              </Link>
              <Link href="/contact-us" className="text-base font-medium">
                联系我们
              </Link>
              <Link
                href="/user-agreement"
                className="text-base font-medium"
                target="_blank"
                rel="noopener noreferrer"
              >
                用户协议
              </Link>
              <Link
                href="/privacy-policy"
                className="text-base font-medium"
                target="_blank"
                rel="noopener noreferrer"
              >
                隐私条款
              </Link>
            </nav>
          </div>
          <div className="flex gap-5">
            <Popover
              placement="topRight"
              content={content(vxQrcode, "企业微信")}
            >
              <div className="bg-white rounded-lg p-2 hover:opacity-60">
                <Image src={vxIcon} alt="企业微信" width={24} height={24} />
              </div>
            </Popover>

            <Popover
              placement="topRight"
              content={content(vxGroupQrcode, "企业微信群")}
            >
              <div className="bg-white rounded-lg p-2 hover:opacity-60">
                <Image
                  src={vxGroupIcon}
                  alt="企业微信群"
                  width={24}
                  height={24}
                />
              </div>
            </Popover>

            <Popover
              placement="topRight"
              content={content(feishuQrcode, "飞书")}
            >
              <div className="bg-white rounded-lg p-2 hover:opacity-60">
                <Image src={feishuIcon} alt="飞书" width={24} height={24} />
              </div>
            </Popover>

            <Popover
              placement="topRight"
              content={content(dingTalkQrcode, "钉钉")}
            >
              <div className="bg-white rounded-lg p-2 hover:opacity-60">
                <Image src={dingTalkIcon} alt="钉钉" width={24} height={24} />
              </div>
            </Popover>
          </div>
        </div>
        <div className="w-full h-px bg-white opacity-20 mt-10 mb-6"></div>
        <div className="flex items-center justify-center gap-20">
          <p className="text-center text-sm">
            Copyright ©{currentYear - 13} - {currentYear} 深圳市思讯网络有限公司
          </p>
          <div className="flex items-center">
            <Image
              src={icpImg}
              alt="粤ICP备2024177480号"
              width={20}
              height={20}
            />
            <a
              href="https://beian.miit.gov.cn/#/Integrated/index"
              target="_blank"
              rel="noopener noreferrer"
              className="pl-1.5"
            >
              粤ICP备2024177480号
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
