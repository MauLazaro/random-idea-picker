import { useState } from "react";
import { Card, CardBody, Button, Tabs, Tab, Input, Spinner } from "@heroui/react";
import { getDinnerList, getProjectList, getProgrammingSoftwaresList } from "../utils/getDefinedLists";
import { Dices } from "lucide-react";

const CardSection = () => {
    const [selectedTab, setSelectedTab] = useState("Project ideas");
    const [valueSelected, setValueSelected] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    
    let tabs = [{ id: "Project ideas" }, { id: "Dinner ideas" }, { id: "Languages & Frameworks"}];
    
    const handlePicker = () => {
        setIsLoading(true);
        setTimeout(() => {
            try {
                let list;
                if (selectedTab == tabs[0].id) {
                    list = getProjectList;
                } else if (selectedTab == tabs[1].id) {
                    list = getDinnerList;
                } else {
                    list = getProgrammingSoftwaresList;
                }
                
                if (list && list.length > 0) {
                    const randomItem = list[Math.floor(Math.random() * list.length)];
                    setValueSelected(randomItem);
                } else {
                    setValueSelected("No ideas available.");
                }
            } catch (error) {
                console.error(error);
                setValueSelected("Internal Error...");
            } finally {
                setIsLoading(false);
            }
        }, 1000);
    }
    
    return (
        <Card isBlurred shadow="sm" className="border-none bg-background/60 dark:bg-default-100/50 max-w-[610px]">
            <CardBody>
                <div className="justify-center">
                    <span>Input</span>
                    <div className="flex flex-col m-3">
                        <span>Defined Lists</span>
                        <Tabs color="warning" items={tabs} selectedKey={selectedTab} onSelectionChange={(tab) => setSelectedTab(tab.toString())}>
                            {tabs.map((item) => (<Tab key={item.id} title={item.id} className={`${selectedTab == item.id && "font-bold"}`}/>))}
                        </Tabs>
                        <div className="flex justify-end mt-4">
                            <Button className="flex justify-center items-center" variant="shadow" color="warning" title="Random Pick!" onPress={handlePicker}>
                                {isLoading ? <Spinner color="white" variant="wave" className="mb-3" /> : <Dices className="text-white"/> }
                            </Button>
                        </div>
                    </div>
                    
                    <span>Output</span>
                    <Input
                        isReadOnly={isLoading == false}
                        isDisabled={isLoading == true}
                        className="max-w-md"
                        type="text"
                        variant="flat"
                        value={valueSelected}
                    />
                </div>
            </CardBody>
        </Card>
    );
};

export default CardSection;
