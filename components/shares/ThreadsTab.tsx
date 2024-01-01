import { fetchUserPosts } from "@/lib/actions/user.actions";
import { redirect } from "next/navigation";

interface Props {
    currentUserId: string;
    accountId: string;
    accountType: string;
}

const ThreadsTab = async ({ currentUserId, accountId, accountType }: Props) => {
    // TODO: Fetch profile threads
    let result = await fetchUserPosts(accountId);

    if(!result) redirect('/')
    
    return (
        <section>
            ThreadsTab
        </section>
    )
}

export default ThreadsTab;