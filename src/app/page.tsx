import About from "@/components/about/about";
import Contacto from "@/components/contact/contacto";
import Chef from "@/components/descripcion/chef";
import Galeria from "@/components/galeria/galeria";
import Header from "@/components/header/header";
import Menu from "@/components/seccionMenu/menu";

export default function Home() {
  return (
<div>
<Header/>
<About/>
<Menu/>
<Galeria/>
<Chef/>
<Contacto/>
</div>
  );
}
