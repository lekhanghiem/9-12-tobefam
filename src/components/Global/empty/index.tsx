import Image from "next/image";

export const EmptyComponent = () => {
  return (
    <div className="w-full h-full  py-[54px] px-[10px] flex justify-center">
      <div>
        <div>
          <Image src="/images/empty.png" alt="empty" width={100} height={90} />
        </div>
        <div className="text-md text-text-placeholder">{"No data yet"}</div>
      </div>
    </div>
  );
};
