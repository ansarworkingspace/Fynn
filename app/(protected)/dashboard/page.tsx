import { onBoardUser } from "@/app/actions/user";

type Props = {};

async function Page({}: Props) {

  const user = await onBoardUser()

  return <div>
    
  </div>
}

export default Page;
