import Button from "../../../../componet/buttons"
export default function Premium () {
    return (
        <section className="bg-[color:var(--background-secondary)] mb-4 rounded-2xl border border-[color:var(--background-secondary)] py-3 px-4 flex flex-col gap-2.5 ">
           <h6 className="text-xl font-extrabold leading-6">  Premium'a Abone Ol</h6>
            <p className="text-[15px] font-bold leading-5">Yeni özellikleri açmak için abone ol ve uygun olman durumunda reklam geliri payı kazan.</p>

           <div className="self-start">
           <Button>Abone Ol</Button>
           </div>
        </section>
    )
}