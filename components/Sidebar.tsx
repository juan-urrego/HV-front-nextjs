import Image from "next/image"
import { ProgressBarSkill } from './ProgressBarSkill'
import { ExtraSkill } from "./ExtraSkill"
import { SidebarTitle } from "./SidebarTitle"
import { Separator } from "./Separator"


const Sidebar = () => {
    return (
        <aside className="sticky top-0 flex flex-col w-[450px] px-10 py-10 gap-[10px] h-screen overflow-hidden">
            <section className="flex flex-col items-center px-1 py-2 gap-7">
                <Image
                    className="rounded-[100%]"
                    src="/pit2.jpg"
                    width={150}
                    height={150}
                    alt="profile"
                />
                <div className=" flex flex-col items-center gap-4">
                    <SidebarTitle text="Juan Urrego" />
                    <span className="text-gray">Back-End Developer</span>
                </div>
            </section>
            <Separator />
            <section className=" flex flex-col gap-1 text-black font-normal text-md">
                <div className="flex w-full items-center justify-between">
                    <span>Edad:</span>
                    <span>24</span>
                </div>
                <div className="flex w-full items-center justify-between">
                    <span>Residencia:</span>
                    <span>Campo Valdes</span>
                </div>
                <div className="flex w-full items-center justify-between">
                    <span>Celular:</span>
                    <span>3128959561</span>
                </div>
                <div className="flex w-full items-center justify-between">
                    <span>Direccion:</span>
                    <span>Cra50 #70-89</span>
                </div>
            </section>
            <Separator />
            <section className=" flex flex-col py-2 gap-1">
                <SidebarTitle text="Idiomas" />

                <ProgressBarSkill name='Español' value='100' />
                <ProgressBarSkill name='Inglés' value='55' />
            </section>
            <Separator />
            <section className=" flex flex-col py-2 gap-1">
                <SidebarTitle text="Lenguajes de programación" />

                <ProgressBarSkill name='Java' value='80' />
                <ProgressBarSkill name='Python' value='30' />
                <ProgressBarSkill name='Javascript' value='50' />
            </section>
            <Separator />
            <section className=" flex flex-col py-2 gap-1">
                <SidebarTitle text="Extra skills" />
                <ExtraSkill text="Programación funcional, Spring webflux" />
                <ExtraSkill text="Arquitecturas limpias, microservicios" />
                <ExtraSkill text="DDD, Solid" />
            </section>
            <Separator />
        </aside>
    )
}

export { Sidebar }