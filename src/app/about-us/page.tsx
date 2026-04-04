import localFont from "next/font/local";
import { cn } from "@/lib/utils";

import Image from "next/image";

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

export default function AboutUsPage() {
  return (
    <div>
      <section className="max-w-360 mx-auto pt-37.5 px-25">
        <h1
          className={cn(
            "text-center text-[60px] font-semibold",
            sourceHanSerif.className
          )}
        >
          我们的业务
        </h1>

        <p className="text-[#5E5F83] text-[16px] text-center mt-9">
          通智云，全称 <span className="text-[#242430]">通用智能云平台</span>{" "}
          ，是 AI 时代专为企业打造的
          <span className="text-[#242430]"> 一站式业务智能化平台</span>
          。我们深耕企业智能化云基础设施领域，致力于让 AI
          真正落地到业务场景，成为企业智能化升级的可靠合作伙伴，助力企业在 AI
          时代抢占先机、降本增效、长效增长。
        </p>

        <div
          className={cn(
            "grid grid-cols-2 gap-4 text-2xl font-semibold mt-9 text-[#51526D]",
            sourceHanSerif.className
          )}
        >
          <div className="p-10 shadow-card-border rounded-[20px] flex items-start gap-36">
            <p>
              聚焦
              <span className="text-primary">
                流量转化、智能营销、商业分析、智能体服务
              </span>
              四大核心方向
            </p>
            <Image
              src="/images/stars.svg"
              width={40}
              height={40}
              alt="聚焦流量转化、智能营销、商业分析、智能体服务四大核心方向"
            />
          </div>

          <div className="p-10 shadow-card-border rounded-[20px] flex items-start gap-36">
            <p>
              提供
              <span className="text-primary">可落地、可观测、可调优</span>的
              <span className="text-primary">全栈智能化</span>
              解决方案
            </p>
            <Image
              src="/images/lightbulb.svg"
              width={40}
              height={40}
              alt="提供可落地、可观测、可调优的全栈智能化解决方案"
            />
          </div>

          <div className="p-10 shadow-card-border rounded-[20px] flex items-start gap-36">
            <p>
              以<span className="text-primary">低门槛极速接入能力</span>
              ，实现业务快速上线、价值快速验证
            </p>
            <Image
              src="/images/dataflow.svg"
              width={40}
              height={40}
              alt="以低门槛极速接入能力，实现业务快速上线、价值快速验证"
            />
          </div>

          <div className="p-10 shadow-card-border rounded-[20px] flex items-start gap-36">
            <p>
              以
              <span className="text-primary">行业级成熟算法与深度数据洞察</span>
              ，精准提效、驱动业务增长
            </p>
            <Image
              src="/images/eye.svg"
              width={40}
              height={40}
              alt="以行业级成熟算法与深度数据洞察，精准提效、驱动业务增长"
            />
          </div>
        </div>
      </section>

      <section
        className={cn(
          "max-w-360 mx-auto p-10 mt-22.5",
          sourceHanSerif.className
        )}
      >
        <h2 className="text-[40px] text-black font-semibold">我们的使命</h2>

        <div className="grid grid-cols-4 mt-9 gap-4 text-[#7B7C9E] text-[28px] font-semibold">
          <div className="p-10 rounded-xl bg-[#F9F9FB]">
            我们坚持做难而正确的事情，让
            <span className="text-[#242430]">AI</span>普惠社会
          </div>
          <div className="p-10 rounded-xl bg-[#F9F9FB]">
            我们坚持用AI提升社会生产力，坚信AI必将
            <span className="text-[#242430]">造福人类</span>
          </div>
          <div className="p-10 rounded-xl bg-[#F9F9FB]">
            我们将
            <span className="text-[#242430]">AI业务化</span>
            ，持续推动各行各业的业务AI化
          </div>
          <div className="p-10 rounded-xl bg-[#F9F9FB]">
            我们为
            <span className="text-[#242430]">创造价值</span>
            而生，以推动社会进步为己任
          </div>
        </div>
      </section>

      <section className="max-w-360 mx-auto p-10">
        <h2
          className={cn(
            "text-[40px] text-black font-semibold",
            sourceHanSerif.className
          )}
        >
          我们是谁？
        </h2>

        <div className="flex gap-3 mt-9">
          <div
            className={cn(
              "rounded-[20px] shadow-card-border text-white bg-gradient-black-fade p-10 flex-1 text-[28px] font-semibold",
              sourceHanSerif.className
            )}
          >
            我们是一群极客， 以创新突破为乐，以固步自封为耻
          </div>
          <div className="flex-1 flex flex-col gap-3">
            <div className="shadow-card-border bg-gradient-blue-fade flex-1 rounded-[20px] p-10">
              <p
                className={cn(
                  "text-[28px] font-semibold text-[#31373D]",
                  sourceHanSerif.className
                )}
              >
                我们深耕多年
              </p>
              <p className="text-[#373850]">勇于打破常规，难题使我们兴奋</p>
            </div>
            <div className="shadow-card-border bg-gradient-blue-fade flex-1 rounded-[20px] p-10">
              <p
                className={cn(
                  "text-[28px] font-semibold text-[#31373D]",
                  sourceHanSerif.className
                )}
              >
                我们心怀使命感
              </p>
              <p className="text-[#373850]">简单相信，傻傻坚持</p>
            </div>
          </div>
        </div>
      </section>

      <section
        className={cn(
          "max-w-360 mx-auto px-10 pb-10",
          sourceHanSerif.className
        )}
      >
        <h2 className="text-[40px] text-black font-semibold">我们的价值观</h2>

        <div className="grid grid-cols-4 mt-9 gap-4 text-[#31373D] text-[28px] font-semibold">
          <div className="p-7.5 rounded-lg shadow-card-border">
            <div className="rounded-lg border border-solid border-[#DDE] inline-block p-3">
              <Image
                src="/images/check-heart.svg"
                width={36}
                height={36}
                alt="我们敬畏用户的信任，全力以赴交付价值"
              ></Image>
            </div>
            <p className="pt-6">
              我们<span className="text-[#DD2590]">敬畏用户的信任</span>
              ，全力以赴交付价值
            </p>
          </div>
          <div className="p-7.5 rounded-lg shadow-card-border">
            <div className="rounded-lg border border-solid border-[#DDE] inline-block p-3">
              <Image
                src="/images/award.svg"
                width={36}
                height={36}
                alt="我们拥抱变化，在试错中成长"
              ></Image>
            </div>
            <p className="pt-6">
              我们拥抱变化，在
              <span className="text-[#DD2590]">试错中成长</span>
            </p>
          </div>

          <div className="p-7.5 rounded-lg shadow-card-border">
            <div className="rounded-lg border border-solid border-[#DDE] inline-block p-3">
              <Image
                src="/images/face-smile.svg"
                width={36}
                height={36}
                alt="我们以实干为荣，以空谈为耻"
              ></Image>
            </div>
            <p className="pt-6">
              我们以
              <span className="text-[#7839EE]">实干为荣</span>
              ，以空谈为耻
            </p>
          </div>
          <div className="p-7.5 rounded-lg shadow-card-border">
            <div className="rounded-lg border border-solid border-[#DDE] inline-block p-3">
              <Image
                src="/images/beaker.svg"
                width={36}
                height={36}
                alt="我们把产品当成艺术品来雕琢"
              ></Image>
            </div>
            <p className="pt-6">
              我们把产品<span className="text-[#E62E05]">当成艺术品</span>
              来雕琢
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
