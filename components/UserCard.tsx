export default function UserCard({ name = "", position = "", email = "", tel = "" }: any) {

    return (
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow w-full p-4">
            <p className="text-xl text-gray-800 dark:text-white  leading-5 md:leading-6">{name}</p>
            <p className="text-lg text-sky-700 dark:text-sky-600 leading-5 md:leading-6">{position}</p>
            {email != "" && <p className="text-sm text-gray-500 dark:text-gray-300 leading-5 md:leading-6">{email}</p>}
            {tel != "" && <p className="text-sm text-gray-500 dark:text-gray-300 leading-5 md:leading-6">{tel}</p>}
        </div>
    )
}
