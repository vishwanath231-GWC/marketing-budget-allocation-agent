import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import generative from "@/assets/images/generative.png";
import approve from "@/assets/images/approve.png";
import { Textarea } from "@/components/ui/textarea";
import reject from "@/assets/images/decline.png";
import axios from "axios";
import { successToast } from "@/components/Toaster";
import Markdown from 'react-markdown'

const HomePage = () => {

    const [inputValue, setInputValue] = useState('');
    const [validErr, setValidErr] = useState('');
    const [rejectModal, setRejectModal] = useState(false);
    // const [testModal, setTestModal] = useState(false);
    const [ThreadId, setThreadId] = useState<any>();
    const [loading, setLoading] = useState(false);
    const [Response, setResponse] = useState<any>();
    const [feedback, setFeedback] = useState<any>('');

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
        // setTestModal(true);
        console.log(inputValue);
        const thread_id = Math.floor(Math.random() * 100) + 1;
        setThreadId(thread_id);
        setLoading(true);
        const body = {
            "query": `analyze and generate budget recommendation for ${inputValue} days`,
            "feedback": "",
            "thread_id": thread_id
        }
        axios.post('http://127.0.0.1:8000/agent', body).then((res) => {
            console.log(res.data);
            setResponse(res.data);
            setLoading(false);
        }).catch((err) => {
            console.error(err);
            setLoading(false);
        });
    }

    const handleApprove = () => {
        setLoading(true);
        console.log('Approved');
        const body = {
            "query": `approve`,
            "feedback": "",
            "thread_id": ThreadId
        }
        axios.post('http://127.0.0.1:8000/agent', body).then((res) => {
            console.log(res.data);
            
            if(res.data.result){
                successToast('Mail has been sent to the manager');
                setResponse(res.data);
            }
            setLoading(false);
        }).catch((err) => {
            console.error(err);
            setLoading(false);
        });
    }

    const handleReject = () => {
        setRejectModal(true);
        setLoading(true);
        const body = {
            "query": `rejected`,
            "feedback": feedback,
            "thread_id": ThreadId
        }
        axios.post('http://127.0.0.1:8000/agent', body).then((res) => {
            console.log(res.data);
            if(res.data.result){
                // successToast('Mail has been sent to the manager');
                setResponse(res.data);
            }
            
            setLoading(false);
        }).catch((err) => {
            console.error(err);
            setLoading(false);
        });
    }

    // const randomNumber = Math.floor(Math.random() * 100) + 1;
  return (

    
    <div className="py-4 px-2 mt-3">
    {(loading) && (
				<div className="absolute inset-0 z-10 bg-gray-200/50 flex items-center justify-center">
					<div className="loader"></div>
				</div>
			)}
        <div className={`grid ${Response?.result  ? 'grid-cols-2' : 'grid-cols-1'} gap-5`}>
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
                    Response?.result && (
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
                                                <Textarea placeholder="Type your message here." onChange={(e) => setFeedback(e.target.value)} value={feedback}  />
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
                Response?.result && (
                    <div className="bg-white border border-gray-200 rounded-md py-6 md:px-9 px-2">
                        <div className="">
                            <div className="text-sm font-medium mb-3">Agent Response</div>
                            <div className="h-[400px] overflow-y-scroll">
                                <Markdown>{Response.result}</Markdown>
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
