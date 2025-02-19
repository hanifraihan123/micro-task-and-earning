

const ExtraSection = () => {
    return (
        <div className="flex gap-8">
            <div className="text-center flex-1 bg-blue-100 py-4 space-y-4">
                <h3 className="font-bold text-4xl pb-4">Keeping Your Data Safe</h3>
                <p className="font-thin pb-6">At PaidWork, we take data privacy very <br /> seriously. We’ve developed our platform <br /> to ensure that your privacy is always <br /> protected to the best of our ability.</p>
                <div className="flex gap-2 items-center justify-center"><img className="h-12 w-24" src="https://i.ibb.co.com/v6HSbBJ4/google-tasks-logo-freelogovectors-net.png" alt="" /><p className="font-bold text-2xl">Data Security</p> </div>
                <div className="flex gap-2 items-center justify-center"><img className="h-12 w-24" src="https://i.ibb.co.com/v6HSbBJ4/google-tasks-logo-freelogovectors-net.png" alt="" /><p className="font-bold text-2xl">Data Privacy</p> </div>
                <div className="flex gap-2 items-center justify-center"><img className="h-12 w-24" src="https://i.ibb.co.com/v6HSbBJ4/google-tasks-logo-freelogovectors-net.png" alt="" /><p className="font-bold text-2xl">Transparent handling of your data</p> </div>
            </div>
            <div className="flex-1">
                <img src="https://i.ibb.co.com/SXD55PqT/5c81d12ca5c93-Tasks-Management-Logo-Design.jpg" alt="" />
            </div>
        </div>
    );
};

export default ExtraSection;