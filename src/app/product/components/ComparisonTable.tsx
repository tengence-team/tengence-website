import { forwardRef } from "react";
import { Table } from "antd";
import { cn } from "@/lib/utils";
import { sourceHanSerif, data, createColumns } from "../constants";

export const ComparisonTable = forwardRef<HTMLDivElement>(function ComparisonTable(
  _props,
  ref
) {
  const columns = createColumns();

  return (
    <div ref={ref} className="flex-1">
      <Table
        columns={columns}
        dataSource={data}
        pagination={false}
        className="shadow-card-border rounded-[20px] overflow-hidden"
        onRow={(record, index) => ({
          className: cn(
            "text-center text-base text-[#31373D]",
            sourceHanSerif.className,
            index !== undefined &&
              index !== 0 &&
              record.categoryId &&
              data[index - 1]?.categoryId !== record.categoryId &&
              "[&>td]:border-t-[1.5px] [&>td]:border-t-[#C0C8D5]"
          ),
        })}
        bordered
      />
    </div>
  );
});
