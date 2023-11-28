import HomeTitle from "@/components/homeTitle";
import ProfileImage from "@/components/profileImage";
import TwoColContent from "@/components/twoColContent";

export default function Home() {
  return (
    <>
      <HomeTitle />
      <TwoColContent oneCol='abc' twoCol='def'/>
      <ProfileImage />
    </>
  )
}
