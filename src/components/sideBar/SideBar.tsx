import React from "react";
import ChevronFirst from "../chevronFirst/ChevronFirst";

class SideBar extends React.Component<{ children: any }> {
    render() {
        let {children} = this.props;
        return <>

            <aside className="h-screen">
                <nav className="h-full flex-col bg-white border-r shadow-sm">
                    <div className="p-4 pb-2 flex justify-between items-center">
                        <img src="https://img.logoipsum.com/243.svg" className="w-32"/>
                        <button className="p-1.5 rounded-lg bg-gray-50 hover:bg-gray-100 ">
                            <ChevronFirst/>
                        </button>
                    </div>

                    <ul>{children}</ul>


                </nav>


            </aside>


        </>
    }
}

export default SideBar;