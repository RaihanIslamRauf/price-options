import PriceOption from "../components/PriceOption/PriceOption";
const PriceOptions = () => {
    
    const priceOptions = [
        {
            "id": 1,
            "optionName": "Basic Plan",
            "price": 20,
            "features": [
                "Access to gym equipment",
                "Locker room access",
                "Open gym hours only",
                "No personal training sessions"
            ]
        },
        {
            "id": 2,
            "optionName": "Standard Plan",
            "price": 40,
            "features": [
                "Access to gym equipment",
                "Locker room access",
                "Access to group classes",
                "1 personal training session per month",
                "Access to sauna and steam room"
            ]
        },
        {
            "id": 3,
            "optionName": "Premium Plan",
            "price": 60,
            "features": [
                "Unlimited access to gym equipment",
                "Locker room access",
                "Access to all group classes",
                "Weekly personal training sessions",
                "Access to sauna, steam room, and swimming pool",
                "Free fitness assessment"
            ]
        }
    ]
    

    return (
        <div className="m-12">
            <h2 className="text-5xl">Best Prices in the town</h2>
        <div className="grid md:grid-cols-3 gap-6">
        {
                priceOptions.map(option => <PriceOption key={option.id} option={option}></PriceOption>)
            }
        </div>
        </div>
    );
};

export default PriceOptions;