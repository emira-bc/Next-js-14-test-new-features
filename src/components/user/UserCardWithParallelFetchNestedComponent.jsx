import { UserCard } from "@/components/user/UserCardWithParallelFetch";

export const UserCardWithParallelFetchNestedComponent = async ({ id }) => (
    <>
        Tested Parallel call for nested component !
        <UserCard id={id} />
    </>
)