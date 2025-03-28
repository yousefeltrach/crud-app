export default function EditTopicForm() {
    return (
        <form className="flex flex-col gap-3">
        <input 
        className="border border-slate-500 px-8 py-2" 
        type="text" 
        placeholder="Topic Title" 
    />

         <input 
         className="border border-slate-500 rounded-md p-2" 
         type="text" 
         placeholder="Topic Description" 
    />
    <button className="bg-green-600 font-bold text-white px-6 py-3 w-fit">Update Topic</button>
    </form>
    )
}
