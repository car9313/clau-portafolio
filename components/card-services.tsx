import { ArrowRight } from "lucide-react";

interface Props {
    title: string;
    des: string;
    icon: React.ReactNode;
}

const CardServices = ({ title, des, icon }: Props) => {
    return (
        <div className="w-full px-12 h-80 py-10 rounded-lg border-none shadow-xl flex items-center bg-linear-to-r from-indigo-300 dark:from-indigo-700 to-indigo-100 dark:to-indigo-950  group hover:bg-linear-to-b  transition-colors duration-100 group">
            <div className="h-72 overflow-y-hidden">
                <div className="flex h-full flex-col gap-10 translate-y-16 group-hover:translate-y-0 transition-transform duration-500">
                    <div className="w-10 h-8 flex flex-col justify-between">
                        {icon ? (
                            <span className="text-5xl text-designColor ">{icon}</span>
                        ) : (
                            <>
                                <span className="w-full h-0.5 rounded-lg dark:bg-designColor inline-flex"></span>
                                <span className="w-full h-0.5 rounded-lg dark:bg-designColor inline-flex"></span>
                                <span className="w-full h-0.5 rounded-lg dark:bg-designColor inline-flex"></span>
                                <span className="w-full h-0.5 rounded-lg dark:bg-designColor inline-flex"></span>
                            </>
                        )}
                    </div>
                    <div className="flex flex-col gap-6">
                        <h2 className="text-xl md:text-2xl font-titleFont font-bold dark:text-indigo-200 text-indigo-800">
                            {title}
                        </h2>
                        <p className="base">{des}</p>
                        <span className="text-2xl text-designColor">
                            <ArrowRight />
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CardServices;
