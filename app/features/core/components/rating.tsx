import { StarIcon } from "@heroicons/react/24/solid";

interface RatingProps {
    rating: number;
    maxRating?: number;
    size?: "sm" | "md" | "lg";
}

export default function Rating({
    rating,
    maxRating = 5,
    size = "md",
}: RatingProps) {
    const sizeClasses = {
        sm: "w-4 h-4",
        md: "w-5 h-5",
        lg: "w-6 h-6",
    };

    return (
        <div className="flex items-center">
            {[...Array(maxRating)].map((_, index) => (
                <StarIcon
                    key={index}
                    className={`${sizeClasses[size]} ${
                        index < rating ? "text-yellow-400" : "text-gray-300"
                    }`}
                />
            ))}
        </div>
    );
}
