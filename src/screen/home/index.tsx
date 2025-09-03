import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import generative from "@/assets/images/generative.png";
import approve from "@/assets/images/approve.png";
import { Textarea } from "@/components/ui/textarea";
import reject from "@/assets/images/decline.png";

const HomePage = () => {

    const [inputValue, setInputValue] = useState('');
    const [validErr, setValidErr] = useState('');
    const [rejectModal, setRejectModal] = useState(false);
    const [testModal, setTestModal] = useState(false);

    const handleActualChange = (value: string) => {
		if (value === '' || /^\d*\.?\d{0,2}$/.test(value)) {
			setInputValue(value);
            setValidErr('');
		} else {
			setValidErr('Only numbers are allowed');
		}
    }

    const handleAnalyze = (e: any) => {
        e.preventDefault();
        if (inputValue === '') {
            setValidErr('Please enter a number');
            return;
        } 
        setTestModal(true);
        console.log(inputValue);
    }

    const handleApprove = () => {
        console.log('Approved');
    }

    const handleReject = () => {
        setRejectModal(true);
    }

    // const randomNumber = Math.floor(Math.random() * 100) + 1;
  return (

    // {(loading || filterLoading || magicRosterLoading) && (
	// 			<div className="absolute inset-0 z-10 bg-gray-200/50 flex items-center justify-center">
	// 				<div className="loader"></div>
	// 			</div>
	// 		)}
    <div className="py-4 px-2 mt-3">
        <div className={`grid ${testModal ? 'grid-cols-2' : 'grid-cols-1'} gap-5`}>
            <div>
                <div className="bg-white border border-gray-200 rounded-md py-6 md:px-9 px-2 h-fit">
                    <div className="text-sm font-medium">How many days you want to analyze the campaigns</div>
                    <form className="mt-4 flex items-center">
                        <div className="w-full">
                            <Input 
                                type="text"
                                inputMode="text"
                                pattern="[0-9]*[.,]?[0-9]*"
                                value={inputValue}
                                onChange={(e) => handleActualChange(e.target.value)} 
                                className="w-full"
                                placeholder="Number of days"
                            />
                        </div>
                        <Button type="submit" onClick={handleAnalyze} className="ml-2 w-fit cursor-pointer bg-[#6f2d8c]">
                            <img src={generative} alt="Generative" className="w-6" />
                            Analyze
                        </Button>
                    </form>
                    <div className="text-sm mt-2 text-red-400">{validErr && validErr}</div>
                </div>

                {
                    testModal && (
                        <div>
                            <div className="bg-white border border-gray-200 rounded-md py-6 md:px-9 px-2 h-fit mt-5">
                                <div className="">
                                    <div className="text-sm font-medium mb-3">Got through the insights to approve or reject the campaign</div>
                                    <div>
                                        <Button className="mr-2 bg-green-700 cursor-pointer" onClick={handleApprove}>
                                            <img src={approve} alt="Approve" className="w-6" />
                                            Approve
                                        </Button>
                                        <Button className="mr-2 bg-[#ee404c] cursor-pointer" onClick={() =>setRejectModal(!rejectModal) }>
                                            <img src={reject} alt="Reject" className="w-6" />
                                            Reject
                                        </Button>
                                    </div>
                                </div>
                            </div>
            
                            {
                                rejectModal && (
                                    <div className="bg-white border border-gray-200 rounded-md py-6 md:px-9 px-2 h-fit mt-5">
                                        <div className="">
                                            <div className="text-sm font-medium mb-3">Reason for rejection</div>
                                            <div>
                                                <Textarea placeholder="Type your message here." />
                                            </div>
                                            <div className="mt-3 flex justify-end">
                                                <Button variant="outline" onClick={() => setRejectModal(false)} className="cursor-pointer mr-2">Cancel</Button>
                                                <Button type="submit" className="cursor-pointer" onClick={handleReject}>Submit</Button>
                                            </div>
                                        </div>
                                    </div>
                                )
                            }
                        </div>
                    )
                }

            </div>

            {
                testModal && (
                    <div className="bg-white border border-gray-200 rounded-md py-6 md:px-9 px-2">
                        <div className="">
                            <div className="text-sm font-medium mb-3">Agent Response</div>
                            <div className="h-[400px] overflow-y-scroll">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias minus ut, unde nemo sint ad totam, officiis rem eligendi sunt natus. Dolorum sequi odit sint, numquam nobis rem aperiam excepturi reiciendis officiis, non odio quo. Corporis quam iusto fugiat quae dicta earum sequi debitis, et optio repellat cumque consequatur recusandae error tempora odio omnis consectetur sed, ex totam natus a aspernatur. Modi deleniti facilis numquam maiores velit magnam iusto! Non sapiente delectus dicta sequi eum exercitationem, voluptas enim, libero ex quibusdam porro hic sed nihil quos architecto iusto ipsa quasi asperiores excepturi saepe! Tempora sequi id consequatur eaque saepe sint vitae! Temporibus rem nisi praesentium adipisci cum fuga eius deleniti deserunt, numquam dolorem, repellat doloremque iusto maxime dignissimos at unde sit cumque soluta nostrum aperiam. Dolorem iure in, esse doloremque dolore et iusto architecto non possimus aspernatur tempora, laborum porro repudiandae? Ut sunt sit, aperiam dignissimos modi quaerat quae? Aliquid quasi, consectetur itaque exercitationem mollitia similique sapiente recusandae ab rem adipisci odio officiis voluptatum, tempore earum quia distinctio sequi dolores hic quibusdam? Eius accusamus voluptatum optio ad, magni laborum temporibus dolorum maxime suscipit repellat dicta deleniti tempora, ullam molestiae unde tempore itaque. Optio delectus nihil ipsa! Dicta ratione explicabo maxime numquam vitae illum beatae odio quasi fuga, ex nesciunt, rerum cumque nisi esse. Aut debitis commodi ipsam ipsum nemo ex blanditiis non. Eaque ad voluptatem quae nulla! Odit, rem impedit nisi accusamus excepturi architecto fuga molestias unde. Eius voluptatem quaerat dolor asperiores pariatur cumque nemo atque necessitatibus, quidem temporibus quibusdam, quas deserunt fugiat harum incidunt nostrum ab saepe fuga nesciunt deleniti laborum illo ullam inventore. Aut qui, vero possimus veritatis modi aspernatur, fugiat porro laudantium maiores nisi, voluptatibus iusto nam sint earum perferendis minima mollitia. Esse dolorum quas modi dolorem, quibusdam doloribus odit, nihil provident veniam, neque exercitationem quo! Ad.
                            </div>
                        </div>

                        
                    </div>
                )
            }

        </div>
    </div>
  )
}

export default HomePage;
