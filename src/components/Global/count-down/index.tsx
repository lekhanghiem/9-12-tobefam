import { formatNumber } from "@/app/[locale]/utility/format";
import Countdown from "react-countdown";
type CompletionistProps = {
  raised?: number;
};
type CountdownComponentProps = {
  endDate?: string;
  raised?: number;
};
const Completionist = ({ raised }: CompletionistProps) => {
  return (
    <div className="font-semibold">
      RAISED:
      <span className="font-bold pl-1">
        {raised && formatNumber(raised)} NOW
      </span>
    </div>
  );
};

const CountdownComponent = ({ endDate, raised }: CountdownComponentProps) => {
  const renderer = ({ days, hours, minutes, seconds, completed }: any) => {
    if (completed) {
      return <Completionist raised={raised} />;
    } else {
      return (
        <div className="flex flex-col items-center gap-3">
          <p>Pools ends in:</p>
          <div className="flex justify-center gap-5">
            <div className="flex flex-col gap-1 justify-center items-center relative">
              <div className="w-10 h-10 sm:h-12 sm:w-12 flex justify-between items-center bg-[#d4d4d4] rounded-lg">
                <span className="text-2xl w-full text-center font-semibold text-white">
                  {days}
                </span>
              </div>
              <span className="text-white text-xs text-center capitalize">
                {days == 1 ? "Day" : "Days"}
              </span>
            </div>
            <div className="flex flex-col gap-1 justify-center items-center relative">
              <div className="w-10 h-10 sm:h-12 sm:w-12 flex justify-between items-center bg-[#d4d4d4] rounded-lg">
                <span className="text-2xl w-full text-center font-semibold text-white">
                  {hours}
                </span>
              </div>
              <span className="text-white text-xs text-center font-medium">
                {hours == 1 ? "Hour" : "Hours"}
              </span>
            </div>
            <div className="flex flex-col gap-1 justify-center items-center relative">
              <div className="w-10 h-10 sm:h-12 sm:w-12 flex justify-between items-center bg-[#d4d4d4] rounded-lg">
                <span className="text-2xl w-full text-center font-semibold text-white">
                  {minutes}
                </span>
              </div>
              <span className="text-white text-xs text-center capitalize">
                {minutes == 1 ? "Minute" : "Minutes"}
              </span>
            </div>
            <div className="flex flex-col gap-1 justify-center items-center relative">
              <div className="w-10 h-10 sm:h-12 sm:w-12 flex justify-between items-center bg-[#d4d4d4] rounded-lg">
                <span className="text-2xl w-full text-center font-semibold text-white">
                  {seconds}
                </span>
              </div>
              <span className="text-white text-xs text-center capitalize">
                {seconds == 1 ? "Second" : "Seconds"}
              </span>
            </div>
          </div>
        </div>
      );
    }
  };
  return <Countdown date={endDate} renderer={renderer} />;
};

export default CountdownComponent;
