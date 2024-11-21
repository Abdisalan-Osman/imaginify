"use client";

import { useToast } from "@/hooks/use-toast";
import { dataUrl, getImageSize } from "@/lib/utils";

import { CldImage, CldUploadWidget } from "next-cloudinary";
import { PlaceholderValue } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";

type MediaUploader = {
  publicId: string;
  onValueChange: (value: string) => void;
  setImage: React.Dispatch<any>;
  image: any;
  type: string;
};

export default function MediaUploader({
  publicId,
  onValueChange,
  setImage,
  image,
  type,
}: MediaUploader) {
  const { toast } = useToast();

  function onUploadSuccessHandler(result: any) {
    toast({
      title: "Image uploaded successfully",
      description: "One credit was reducted from your account",
      duration: 5000,
      className: "success-toast",
    });

    setImage((prev: any) => ({
      ...prev,
      publicId: result?.info.public_id,
      width: result?.info.width,
      height: result?.info.height,
      secureURL: result?.info.secure_url,
    }));

    onValueChange(result?.info.public_id);
  }
  function onUploadErrorHandler() {
    toast({
      title: "Something went wrong while uploading",
      description: "Please try again",
      duration: 5000,
      className: "error-toast",
    });
  }

  return (
    <CldUploadWidget
      uploadPreset="imaginafy"
      options={{
        multiple: false,
        resourceType: "image",
      }}
      onSuccess={onUploadSuccessHandler}
      onError={onUploadErrorHandler}
    >
      {({ open }) => {
        return (
          <div className="flex flex-col gap-4">
            <h3 className="h3-bold text-dark-600"> Original</h3>
            {publicId ? (
              <>
                <div className="cursor-pointer overflow-hidden rounded-[10px]">
                  <CldImage
                    width={getImageSize(type, image, "width")}
                    height={getImageSize(type, image, "height")}
                    src={publicId}
                    alt="image"
                    sizes={"(max-width:767px) 100vw, 58vw"}
                    placeholder={dataUrl as PlaceholderValue}
                    className="media-uploader_cldImage"
                  />
                </div>
              </>
            ) : (
              <div className="media-uploader_cta" onClick={() => open()}>
                <div className="media-uploader_cta-image">
                  <Image
                    src="/assets/icons/add.svg"
                    alt="add image"
                    width={24}
                    height={24}
                  />
                </div>
                <p className="p-14-medium">Click here to upload image</p>
              </div>
            )}
          </div>
        );
      }}
    </CldUploadWidget>
  );
}
