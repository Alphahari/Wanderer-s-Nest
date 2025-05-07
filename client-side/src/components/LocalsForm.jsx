import React from 'react'
import { useForm } from "react-hook-form"
import { X } from "lucide-react";
import { toast } from 'react-toastify'

const LocalsForm = ({setShowModal, locationName, userData}) => {
    const {
        register,
        handleSubmit,
        formState: { errors },
        watch,
        reset,
        setValue,
    } = useForm()

    const onSubmit = async (data) => {
        try {
            console.log(data);
            const formData = new FormData();
            formData.append("file", data.image[0]);
            formData.append("upload_preset", "my_unsigned_preset");
            const uploadResponse = await fetch(import.meta.env.VITE_CLOUDINARY_UPLOAD_API, {
                method: "POST",
                body: formData,
            });

            const uploadResult = await uploadResponse.json();
            const imageUrl = uploadResult.url;
            console.log(imageUrl)
            const payload = {
                name: data.name,
                location: data.location,
                bestTime: data.bestTime,
                description: data.description,
                state: locationName,
                userEmail: userData?.message?.email || '',
                imageURL: imageUrl
            };
            // console.log(payload)
            const response = await fetch(import.meta.env.VITE_CREATE_API_EXPERIENCES, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(payload),
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.message || 'Failed to submit form');
            }
            const responseData = await response.json();
            // console.log(responseData);
            toast.success("Experience created successfully!");
            reset();
            setShowModal(false);
        } catch (error) {
            // console.log("error from fomr submistion of local",error)
        }

    };
    return (
        <form onSubmit={handleSubmit(onSubmit)} className="p-4 md:p-5">
            <div className="grid gap-4 mb-4">
                <div>
                    <label className="block mb-2 text-sm font-medium text-gray-900">
                        Experience Name
                    </label>
                    <input
                        type="text"
                        {...register("name", { required: true })}
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-amber-500 focus:border-amber-500 block w-full p-2.5"
                        placeholder="e.g. Hidden Waterfall Hike"
                    />
                    {errors.name && (
                        <p className="mt-1 text-sm text-red-600">This field is required</p>
                    )}
                </div>

                <div>
                    <label className="block mb-2 text-sm font-medium text-gray-900">
                        Location
                    </label>
                    <input
                        type="text"
                        {...register("location", { required: true })}
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-amber-500 focus:border-amber-500 block w-full p-2.5"
                        placeholder="Where is this experience located?"
                    />
                    {errors.location && (
                        <p className="mt-1 text-sm text-red-600">This field is required</p>
                    )}
                </div>

                <div>
                    <label className="block mb-2 text-sm font-medium text-gray-900">
                        Best Time to Visit
                    </label>
                    <input
                        type="text"
                        {...register("bestTime", { required: true })}
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-amber-500 focus:border-amber-500 block w-full p-2.5"
                        placeholder="e.g. November to February"
                    />
                    {errors.bestTime && (
                        <p className="mt-1 text-sm text-red-600">This field is required</p>
                    )}
                </div>

                <div>
                    <label className="block mb-2 text-sm font-medium text-gray-900">
                        Description
                    </label>
                    <textarea
                        rows="4"
                        {...register("description", { required: true })}
                        className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-amber-500 focus:border-amber-500"
                        placeholder="Describe the experience in detail..."
                    ></textarea>
                    {errors.description && (
                        <p className="mt-1 text-sm text-red-600">This field is required</p>
                    )}
                </div>
            </div>

            <div>
                <label className="block mb-2 text-sm font-medium text-gray-900">
                    Experience Image
                </label>
                <div className="flex items-center gap-4">
                    <label className="cursor-pointer">
                        <div className={`px-4 py-2 border rounded-lg text-center ${watch("image")?.[0]
                            ? "border-green-500 bg-green-50 text-green-700"
                            : "border-gray-300 bg-gray-50 hover:bg-gray-100 text-gray-700"
                            }`}>
                            {watch("image")?.[0] ? "Change Image" : "Select Image"}
                            <input
                                type="file"
                                className="hidden"
                                accept="image/*"
                                {...register("image", { required: true })}
                            />
                        </div>
                    </label>
                    {watch("image")?.[0] && (
                        <div className="flex-1 flex items-center gap-2">
                            <span className="text-sm text-gray-600 truncate">
                                {watch("image")[0].name}
                            </span>
                            <button
                                type="button"
                                onClick={() => setValue("image", null)}
                                className="text-red-500 hover:text-red-700"
                            >
                                <X className="h-4 w-4" />
                            </button>
                        </div>
                    )}
                </div>
                {errors.image && (
                    <p className="mt-1 text-sm text-red-600">An image is required</p>
                )}
            </div>

            {/* Image Preview */}
            {watch("image")?.[0] && (
                <div className="mt-4">
                    <p className="text-sm font-medium text-gray-700 mb-2">Image Preview:</p>
                    <div className="relative">
                        <img
                            src={URL.createObjectURL(watch("image")[0])}
                            alt="Preview"
                            className="h-48 w-full object-cover rounded-lg border border-gray-200"
                        />
                        <button
                            type="button"
                            onClick={() => setValue("image", null)}
                            className="absolute top-2 right-2 bg-white/80 hover:bg-white rounded-full p-1 shadow-sm"
                            aria-label="Remove image"
                        >
                            <X className="h-5 w-5 text-gray-700" />
                        </button>
                    </div>
                </div>
            )}

            <button
                type="submit"
                className="text-white bg-amber-500 hover:bg-amber-600 focus:ring-4 focus:outline-none focus:ring-amber-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
            >
                Submit Experience
            </button>
        </form>
    )
}

export default LocalsForm
