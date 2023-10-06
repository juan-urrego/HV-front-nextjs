import Image from "next/image"
import { BsMic } from 'react-icons/bs'
import { FaJava } from 'react-icons/fa'
import { TbHexagonalPrism } from 'react-icons/tb'
import { BsFillDatabaseFill, BsCodeSlash, BsGithub } from 'react-icons/bs'
import { GiRelationshipBounds } from 'react-icons/gi'
import { Sidebar } from "@/components/Sidebar"
import { Header } from "@/components/Header"
import SecundarySidebar from "@/components/SecundarySidebar"
import { MaintTitleContent } from "@/components/MainTitleContent"
import { CardIcon } from "@/components/CardIcon"
import { Education } from "@/components/Education"
import { Separator } from "@/components/Separator"
import { Project } from "@/components/Project"



export default function Home() {
  return (
    <div className="flex">
      <Sidebar />
      <main className="flex flex-col gap-11 px-8 bg-main-content w-full overflow-y-auto">
        <section className="flex bg-white">
            <Header name='Juan Urrego' profession='Backend' description='Soy una persona con amplios conocimientos de 
            todo tipo de tecnologías y con gran capacidad de aprendizaje. Me caracterizo por ser confiable, responsable, 
            activo, versátil, y por tener muy buenas relaciones interpersonales.' url="https://github.com/juan-urrego"/>
            <Image
              src="/foto1.png"
              width={326}
              height={467}
              alt="profile header"
            /> 
        </section>
        <section className="flex flex-col gap-[50px]">
          <MaintTitleContent text="Durante varios años de experiencia, he adquirido un sólido conjunto de conocimientos que incluye" title="Mi conocimiento" />
          <div className="grid grid-cols-3 grid-rows-2 gap-5">
            <CardIcon text="Amplios proyectos" title="Codigo" Icon={BsCodeSlash} />
            <CardIcon text="Microservicios" title="Java" Icon={FaJava} />
            <CardIcon text="Arquitecturas hexagonales" title="Arquitecturas" Icon={TbHexagonalPrism} />
            <CardIcon text="Diseño e implementación de modelos relaciones en base de datos" title="Base de datos" Icon={BsFillDatabaseFill} />
            <CardIcon text="GitFlow, Trunk base" title="Github" Icon={BsGithub} />
            <CardIcon text="Trabajo en equipo" title="Relaciones" Icon={GiRelationshipBounds} />
          </div>
        </section>
        <section className="flex flex-col gap-[50px]">
        <MaintTitleContent text="La educación es esencial en nuestra carrera; representa nuestro 
        crecimiento profesional y un recordatorio constante de que nunca debemos dejar de aprender." title="Educacion" />

          <div className="flex flex-col px-10 py-12 gap-4 bg-white">
            <Education city="Universidad de Antioquia" years="2017-2023" experience="Estudiante" description="Ingeniería de Sistemas tiene como objeto el 
            estudio de elementos en ciencia y tecnología para la investigación, innovación, modelación, implantación y gestión de sistemas físicos o abstractos, 
            orientados al procesamiento simbólico; concebidos en consonancia con criterios estéticos, económicos, culturales y de respeto del entorno." title="Pregrado Ingeniería de sistemas" />
            <Separator />
            <Education city="Sena" years="2015-2016" experience="Estudiante" description="La construcción de softwares que faciliten los procesos de producción 
            dentro de las empresas de distintos sectores es sumamente importante para el desarrollo del país. Y con desarrollo nos referimos al tecnológico, ese 
            que también asegura la resolución de problemas en el menor tiempo posible y sin necesidad de una gran inversión. Pero, ¿cómo se implementan estos softwares? 
            Con un personal calificado en el área." title="Certificado en técnico de programación de software" />
            <Separator />
          </div>
        </section>
        <section className="flex flex-col gap-[50px]">
        <MaintTitleContent text="En 4 años de experiencia que he tenido, tuve la oportunidad de desenvolverme en los siguientes proyectos " title="Portafolio" />

          <div className="flex flex-row gap-20 overflow-y-auto">
        
            <Project title="Solicitud tramite" description="Sistema para la gestión y administración de trámites en la sede investigativa de la universidad de antiquia" 
            textButton="Ver proyecto" url="https://github.com/juan-urrego/SIU-solicitud" urlImage="https://www.grupomynperu.pe/wp-content/uploads/2019/08/grupo-mym-SISTEMA-DE-TRAMITE-DOCUMENTARIO-1.png"/>
            <Project title="Ingreso Asegurados" description="Sistema para el ingreso de grupos familiares a polizas de seguros de vida" textButton="Ver Proyecto" 
            url="https://www.segurossura.com.co/Paginas/empresas/empleados/seguro-colectivo-vida.aspx" urlImage="https://fonvalle.com.co/portal/wp-content/uploads/2019/10/poliza-de-seguro.jpg"/>
            <Project title="Convocatorias de becas" description="Sistema para que la universidad pueda publicar sus convocatorias a becas, y que sus estudiantes puedan aplicar por medio de su tesis" 
            textButton="Ver Proyecto" url="https://github.com/juan-urrego/convocatoria-becas" urlImage="https://www.semarmenia.gov.co/images/beca-global.png"/>
          </div>
        </section>
        <footer className="flex flex-col items-center py-4 bg-white">
          <span>2023 Todos los derechos reservados.Juan Urrego</span>
        </footer>
      </main>
      <SecundarySidebar />
    </div>
  );
}


