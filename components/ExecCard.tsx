import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { LEADERSHIP } from '@/constants/leadership';
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"

const ExecCard = ({ leader }: { leader: typeof LEADERSHIP[number] }) => {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <div className="bg-blue-2 p-6 rounded-lg h-96 w-72 shadow-md flex flex-col justify-around cursor-pointer duration-300 hover:scale-[1.02] transition-ease-in-out">
                    <div className="w-full h-[85%] overflow-hidden relative shadow-sm">
                        <Image src={leader.image} alt={`${leader.name} headshot`}
                            fill
                            className="object-cover rounded-md object-center" />
                    </div>
                    <h3 className="text-xl font-semibold text-white mt-4">{leader.name}</h3>
                </div>
            </DialogTrigger>
            <DialogContent>
                <DialogTitle className="text-2xl">{leader.name}</DialogTitle>
                <DialogDescription className='text-lg font-light'>
                    {leader.description}
                </DialogDescription>
                <Button asChild variant="outline" className='shadow-md hover:shadow-lg transition-ease-in-out duration-300 mt-6'>
                    <a href={leader.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
                </Button>
            </DialogContent>
        </Dialog>
    );
};

export default ExecCard;

