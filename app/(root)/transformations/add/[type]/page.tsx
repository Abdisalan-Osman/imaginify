import Header from "@/components/shared/Header";
import TransformationForm from "@/components/shared/TransformationForm";
import { transformationTypes } from "@/constants";
import { getUserById } from "@/lib/actions/user.action";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

const AddTransformationTypePage = async ({
  params: { type },
}: SearchParamProps) => {
  const transformation = transformationTypes[type];
  const { userId } = await auth();

  if (!userId) redirect("/sign-in");

  const user = await getUserById(userId);
  return (
    <>
      <Header title={transformation.title} subtitle={transformation.subTitle} />

      <section className="mt-8">
        <TransformationForm
          action="Add"
          userId={user._id}
          type={transformation.type as TransformationTypeKey}
          creditBalance={user.creditBalance}
          config={transformation.config}
        />
      </section>
    </>
  );
};

export default AddTransformationTypePage;
