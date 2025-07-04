'use client'

import { useState } from "react";

import Produto from "../public/ddd-removebg-preview.png"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Zap,
  Heart,
  Target,
  Clock,
  
  Repeat,
  Shield,
  Star,
  CheckCircle,
  Leaf,
  Award,
  Users,
  Lock,
  Truck,
  Package,
  ChevronDown,
  ChevronUp,
  Phone,
  Mail,
} from "lucide-react"
import Image from "next/image"


export default function NitroxProLanding() {

  function redirectToCheckout() {
    window.location.href = "https://go.tribopay.com.br/tzbk8fskaf";
  }
    const [activeIndex, setActiveIndex] = useState<number | null>(null);
  
    const faqs = [
      {
        q: "Nitrox Pro é um medicamento?",
        a: "Não. Nitrox Pro é um suplemento alimentar natural, desenvolvido com ingredientes que auxiliam no aumento da disposição, libido e performance masculina. Não precisa de receita médica.",
      },
      {
        q: "Quanto tempo leva para fazer efeito?",
        a: "A maioria dos usuários começa a sentir os efeitos nos primeiros 7 a 15 dias de uso contínuo. Para melhores resultados, é recomendado o uso por pelo menos 3 meses.",
      },
      {
        q: "Tem efeito colateral?",
        a: "Por ser composto por ingredientes naturais, o Nitrox Pro geralmente não causa efeitos colaterais. Ainda assim, recomendamos ler o rótulo e consultar um profissional de saúde caso tenha alguma condição pré-existente.",
      },
      {
        q: "Posso tomar mesmo sem fazer academia?",
        a:"Sim! Nitrox Pro não é exclusivo para quem treina. Ele foi criado para melhorar o desempenho físico, mental e sexual no dia a dia, independente do seu nível de atividade física.",
      },
      {
        q: "Serve para qualquer idade?",
        a: "É indicado para homens adultos a partir dos 18 anos, especialmente os que notam queda na energia, libido ou disposição com o passar dos anos.",
      },
      {
        q: "Como devo tomar o Nitrox Pro?",
        a:  "A recomendação padrão é de 2 cápsulas por dia, preferencialmente com as principais refeições. Basta seguir as instruções do rótulo.",
      }
    ]
  return (
    <div className="min-h-screen bg-black text-white font-sans">
      {/* Hero Section */}
      <section className="relative py-20 px-4 text-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black"></div>
        <div className="absolute inset-0 bg-gradient-radial from-yellow-500/10 via-transparent to-transparent"></div>

        <div className="relative max-w-6xl mx-auto">
          <Badge className="mb-10 rounded-none -rotate-2 bg-yellow-500 hover:bg-white text-black font-bold px-6 py-3 text-sm lg:text-lg tracking-wider">
            VENDA RESTRITA PARA ADULTOS +18
          </Badge>

          <h1 className="text-3xl md:text-7xl font-black mb-8 leading-tight uppercase">
          Potência de Estrela do Xvideos.<span className=" text-yellow-400">Prazer que Deixa Qualquer Mulher</span>  de Perna Bamba
          </h1>

          <div className="w-40 h-1 bg-yellow-500 mx-auto mb-8"></div>

          <h2 className="text-2xl md:text-4xl font-bold mb-6 text-yellow-500">
            Mais Desejo. Mais Potência. Mais Você na Cama.
          </h2>

          <p className="text-lg md:text-xl mb-12 text-gray-300 font-semibold max-w-3xl mx-auto leading-relaxed">
            Com Nitrox Pro, você deixa de ser só mais um e se torna o homem que ela fantasia.
             Ela nunca mais vai esquecer o que você faz entre quatro paredes.
            Só de pensar em você, ela já se molha.
          </p>

          <Button onClick={redirectToCheckout}
            
            className="bg-yellow-500 hover:bg-yellow-400 text-black font-black py-6 lg:px-12 text-xl rounded-none shadow-2xl transform hover:scale-105 transition-all duration-300 border-2 border-yellow-500 hover:border-yellow-400"
          >
         
            QUERO POTÊNCIA AGORA
          </Button>

          <p className="text-sm lg:text-lg text-gray-500 mt-4 ">🔒 Compra 100% Segura | 📦 Entrega Discreta</p>
        </div>
      </section>

      {/* Benefícios */}
      <section className="py-20 px-4 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black mb-6 text-white">
               6 BENEFÍCIOS QUE VÃO
              <span className="text-yellow-500">TRANSFORMAR SUAS NOITES</span>
            </h2>
            <div className="w-32 h-1 bg-yellow-500 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Target, title: "EREÇÕES MAIS FIRMES", desc: "Potência que você sente na hora" },
              { icon: Zap, title: "MAIS ENERGIA", desc: "Vigor para ir até o fim" },
              { icon: Heart, title: "DESEJO ELEVADO", desc: "Libido naturalmente aumentada" },
              { icon: Clock, title: "PRAZER PROLONGADO", desc: "Momentos mais intensos" },
              { icon: Repeat, title: "RECUPERAÇÃO RÁPIDA", desc: "Pronto para a próxima" },
              { icon: Shield, title: "CONFIANÇA TOTAL", desc: "Segurança em cada momento" },

            ].map((benefit, index) => (
              <div
                key={index}
                className="group text-center hover:transform hover:scale-105 transition-all duration-300"
              >
                <div className="bg-gradient-to-b from-gray-800 to-black border border-gray-700  p-8 h-full group-hover:border-yellow-500 transition-all duration-300">
                  <benefit.icon className="size-12 lg:size-16 text-yellow-500 mx-auto mb-6 group-hover:scale-110 transition-transform duration-300" />
                  <h3 className="font-black text-white mb-4  text-lg lg:text-xl">{benefit.title}</h3>
                  <p className="text-gray-400 text-sm lg:text-lg font-semibold leading-relaxed">{benefit.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Produto Visual */}
      <section className="py-20 px-4 bg-black">
        <div className="max-w-6xl mx-auto text-center">
          <div className="relative inline-block mb-12">
            <div className="absolute -inset-8 bg-gradient-radial from-yellow-500/20 via-yellow-500/5 to-transparent rounded-full"></div>

            <div className=" flex flex-col lg:flex-row gap-2 w-full">
           <div className=" flex flex-col place-content-center gap-5 place-items-center w-full lg:w-3/5 ">
           <h2 className=" text-4xl lg:text-5xl font-black  text-yellow-500">NITROX PRO</h2>
           <p className=" text-xl lg:text-2xl text-white  font-bold">60 CÁPSULAS DE PURA POTÊNCIA</p>
           <Image
                src={Produto}
                alt="Nitrox Pro - 60 Cápsulas"
                width={350}
                height={500}
                className="mx-auto drop-shadow-2xl  lg:hidden"
              />
           <p className=" text-lg lg:text-xl text-gray-300">
           
           Cansado de noites sem graça e de ser só mais um? Com Nitrox Pro, você assume o controle e se torna o homem que ela fantasia.
           Ela deseja, sente e nunca mais esquece o que você faz na cama.Você deixa de ser comum e vira o nome que ela sussurra só de lembrar.
           Só de pensar em você, ela se arrepia — e se molha.Com Nitrox Pro, você não faz sexo. Você cria lendas.
           </p>
           <Button onClick={redirectToCheckout}
            
            className="bg-yellow-500 hover:bg-yellow-400 text-black font-black py-6 lg:px-16 text-xl rounded-none shadow-2xl transform hover:scale-105 transition-all duration-300"
          >
            GARANTIR O MEU AGORA
          </Button>
           </div>
       <span className=" hidden lg:grid lg:w-2/5">

    
            <div className="relative">
              <Image
                src={Produto}
                alt="Nitrox Pro - 60 Cápsulas"
               
                className="mx-auto drop-shadow-2xl"
              />
          
            </div>
           
         

        
       
          <div className="flex justify-center gap-6 mb-12">
            <Badge className="bg-green-600 text-white px-4 py-2 font-bold">100% NATURAL</Badge>
            <Badge className="bg-blue-600 text-white px-4 py-2 font-bold">TESTADO</Badge>
            <Badge className="bg-red-600 text-white px-4 py-2 font-bold">APROVADO</Badge>
          </div>

   
          </span>
          </div>
          </div>
        </div>
      </section>

      {/* Ingredientes Naturais */}
      <section className="py-20 px-4 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <Leaf className=" size-14 lg:size-20  text-yellow-500 mx-auto mb-6" />
            <h2 className="text-3xl md:text-5xl font-black mb-6 text-white">
              INGREDIENTES NATURAIS
              <span className="text-yellow-500 ">E POTENTES</span>
            </h2>
            <div className="w-32 h-1 bg-yellow-500 mx-auto mb-6"></div>
            <p className="lg:text-xl text-gray-300 font-semibold text-lg">FÓRMULA CIENTIFICAMENTE DESENVOLVIDA</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 mb-12">
            {[
              { name: "MACA PERUANA", benefit: "Aumenta o desejo naturalmente" },
              { name: "TRIBULUS TERRESTRIS", benefit: "Eleva os níveis de testosterona" },
              { name: "GINSENG", benefit: "Energia física e mental" },
              { name: "ZINCO + MAGNÉSIO", benefit: "Potência hormonal e vigor" },
            ].map((ingredient, index) => (
              <Card
                key={index}
                className="bg-gradient-to-b from-gray-800 to-black border border-gray-700 hover:border-yellow-500 transition-all duration-300 group"
              >
                <CardContent className="p-8 text-center">
                  <div className="w-20 h-20 rounded-full bg-yellow-500 mx-auto mb-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Leaf className="lg:size-10 size-8 text-black" />
                  </div>
                  <h3 className="font-black text-white mb-4 text-lg lg:text-xl ">{ingredient.name}</h3>
                  <p className="text-gray-400 text-sm lg:text-lg font-semibold leading-relaxed">{ingredient.benefit}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center bg-gradient-to-r from-yellow-500/10 to-yellow-500/5 p-8 border border-yellow-500/30">
            <p className=" text-xl lg:text-2xl font-black text-yellow-500">UMA COMBINAÇÃO SEGURA, PODEROSA E 100% NATURAL</p>
          </div>
        </div>
      </section>

      {/* Para Que Tipo de Homem */}
      <section className="py-20 px-4 bg-black">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <Users className="h-20 w-20 text-yellow-500 mx-auto mb-6" />
            <h2 className="text-3xl md:text-5xl font-black mb-6 text-white">
              PARA QUE TIPO DE HOMEM
              <span className="text-yellow-500">É O NITROX PRO?</span>
            </h2>
            <div className="w-32 h-1 bg-yellow-500 mx-auto"></div>
          </div>

          <div className="space-y-6 mb-12">
            {[
              "Homens acima dos 30 anos que sentem queda de libido",
              "Homens que querem surpreender na cama",
              "Homens cansados, estressados, ou com dificuldades em manter o ritmo",
              "Homens que não aceitam perder a potência",
            ].map((type, index) => (
              <div
                key={index}
                className="flex items-center p-6 bg-gradient-to-r from-gray-800 to-black border-l-4 border-yellow-500 hover:bg-gradient-to-r hover:from-gray-700 hover:to-gray-900 transition-all duration-300"
              >
                <CheckCircle className="h-8 w-8 text-yellow-500 mr-6 flex-shrink-0" />
                <p className="text-white text-lg font-semibold">{type}</p>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-r from-yellow-500 to-yellow-400 p-8 text-center">
            <p className="lg:text-2xl text-xl font-black text-black">SE VOCÊ É ESSE HOMEM — NITROX PRO FOI FEITO PRA VOCÊ</p>
          </div>
        </div>
      </section>

      {/* Depoimentos */}
      <section className="py-20 px-4 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black mb-6 text-white">
              O QUE NOSSOS
              <span className="text-yellow-500 block">CLIENTES DIZEM</span>
            </h2>
            <div className="w-32 h-1 bg-yellow-500 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "CARLOS, 45 ANOS",
                text: "Com 45 anos, achei que já era... Nitrox Pro virou o jogo na cama. Minha esposa ficou impressionada!",
                rating: 5,
              },
              {
                name: "ROBERTO, 38 ANOS",
                text: "Minha esposa notou a diferença logo na primeira semana. A energia voltou e a confiança também!",
                rating: 5,
              },
              {
                name: "FERNANDO, 52 ANOS",
                text: "Voltei a me sentir jovem. A confiança voltou total. Recomendo para todos os homens!",
                rating: 5,
              },
            ].map((testimonial, index) => (
              <Card
                key={index}
                className="bg-gradient-to-b from-gray-800 to-black border border-gray-700 hover:border-yellow-500 transition-all duration-300"
              >
                <CardContent className="p-8">
                  <div className="flex mb-6 justify-center">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-6 w-6 text-yellow-500 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-6 text-lg italic leading-relaxed">"{testimonial.text}"</p>
                  <p className="text-yellow-500 font-black text-center">{testimonial.name}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Prova Social */}
      <section className="py-20 px-4 bg-black">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-3 gap-12 text-center">
            <div className="group">
              <Users className=" lg:size-24 size-20 text-yellow-500 mx-auto mb-6 group-hover:scale-110 transition-transform duration-300" />
              <h3 className=" lg:text-4xl text-3xl font-black text-white mb-4">+30.000</h3>
              <p className="text-gray-300 text-lg font-semibold">HOMENS SATISFEITOS NO BRASIL</p>
            </div>
            <div className="group">
              <Shield className=" size-20 lg:size-24 text-yellow-500 mx-auto mb-6 group-hover:scale-110 transition-transform duration-300" />
              <h3 className=" text-3xl lg:text-4xl font-black text-white mb-4">100%</h3>
              <p className="text-gray-300 text-lg font-semibold">DISCRETO E CONFIÁVEL</p>
            </div>
            <div className="group">
              <Award className=" size-20 lg:size-24 text-yellow-500 mx-auto mb-6 group-hover:scale-110 transition-transform duration-300" />
              <h3 className=" text-3xl lg:text-4xl font-black text-white mb-4">5 ESTRELAS</h3>
              <p className="text-gray-300 text-lg font-semibold">AVALIAÇÃO MÉDIA</p>
            </div>
          </div>
        </div>
      </section>

      {/* Garantia e Segurança */}
      <section className="py-20 px-4 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black mb-6 text-white">
              SUA COMPRA
              <span className="text-yellow-500 block">100% SEGURA</span>
            </h2>
            <div className="w-32 h-1 bg-yellow-500 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { icon: Lock, title: "PRIVACIDADE GARANTIDA", desc: "Seus dados protegidos" },
              { icon: Truck, title: "ENTREGA DISCRETA", desc: "Embalagem sem identificação" },
              { icon: Package, title: "EMBALAGEM SEGURA", desc: "Produto bem protegido" },
              { icon: Phone, title: "SUPORTE COMPLETO", desc: "Atendimento especializado" },
            ].map((guarantee, index) => (
              <div key={index} className="text-center group">
                <div className="bg-gradient-to-b from-gray-800 to-black border border-gray-700 p-8 group-hover:border-yellow-500 transition-all duration-300">
                  <guarantee.icon className="  size-14 lg:size-16  text-yellow-500 mx-auto mb-6 group-hover:scale-110 transition-transform duration-300" />
                  <h3 className="font-black text-white mb-4 text-lg">{guarantee.title}</h3>
                  <p className="text-gray-400 text-sm lg:text-lg">{guarantee.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-black">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black mb-6 text-white">
            PERGUNTAS
            <span className="text-yellow-500 block">FREQUENTES</span>
          </h2>
          <div className="w-32 h-1 bg-yellow-500 mx-auto"></div>
        </div>

        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div
              key={index}
              onClick={() =>
                setActiveIndex(activeIndex === index ? null : index)
              }
              className="bg-gradient-to-r from-gray-800 to-black border border-gray-700 hover:border-yellow-500 transition-all duration-300 cursor-pointer"
            >
              <div className="p-8">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-black text-yellow-500 text-xl">
                    {faq.q}
                  </h3>
                  {activeIndex === index ? (
                    <ChevronUp className="h-6 w-6 text-yellow-500" />
                  ) : (
                    <ChevronDown className="h-6 w-6 text-yellow-500" />
                  )}
                </div>
                {activeIndex === index && (
                  <p className="text-gray-300 text-lg leading-relaxed mt-2">{faq.a}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

      {/* Chamada Final */}
      <section className="py-24 px-4 bg-gradient-to-b from-black via-gray-900 to-black relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-radial from-yellow-500/10 via-transparent to-transparent"></div>

        <div className="max-w-4xl mx-auto text-center relative">
          <div className="bg-gradient-to-r from-yellow-500 to-yellow-400 p-4 mb-12 inline-block transform -rotate-2">
            <p className="text-black font-black text-lg lg:text-xl">⚠️ ESTOQUE LIMITADO - ÚLTIMAS UNIDADES</p>
          </div>

          <h2 className="text-4xl md:text-6xl font-black mb-8 leading-tight">
            <span className="text-white">NÃO DEIXE SUA</span>
            <br />
            <span className="text-yellow-500">POTÊNCIA ESCAPAR</span>
            <br />
            <span className="text-white">MAIS UMA VEZ</span>
          </h2>

          <div className="w-40 h-1 bg-yellow-500 mx-auto mb-8"></div>

          <p className="text-lg md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed font-semibold">
            Milhares de homens já transformaram suas vidas. Agora é a sua vez de sentir o poder do
            <strong className="text-yellow-500"> Nitrox Pro</strong>.
          </p>

          <div className="space-y-6">
            <Button onClick={redirectToCheckout}
              size="lg"
              className="bg-yellow-500 hover:bg-yellow-400 text-black font-black py-8 px-16 text-2xl rounded-none shadow-2xl transform hover:scale-105 transition-all duration-300 w-full md:w-auto border-4 border-yellow-500 hover:border-yellow-400"
            >
              <Zap className="mr-4 h-8 w-8 hidden lg:flex" />
              QUERO POTÊNCIA AGORA
            </Button>

            <p className="text-gray-500 font-semibold">
              🔒 Compra 100% Segura | 📦 Entrega Discreta | ⚡ Resultados Garantidos
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 bg-black border-t border-gray-800">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-black text-yellow-500 mb-4">NITROX PRO</h3>
            <div className="flex justify-center gap-8 mb-6">
              <div className="flex items-center text-gray-400">
                <Phone className="h-5 w-5 mr-2" />
                <span>Suporte: (11) 9999-9999</span>
              </div>
              <div className="flex items-center text-gray-400">
                <Mail className="h-5 w-5 mr-2" />
                <span>contato@nitroxpro.com</span>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 text-center">
            <p className="text-gray-500 text-sm mb-4 font-semibold">© 2024 Nitrox Pro. Todos os direitos reservados.</p>
            <p className="text-gray-600 text-xs leading-relaxed max-w-3xl mx-auto">
              Este produto não se destina a diagnosticar, tratar, curar ou prevenir qualquer doença. Os resultados podem
              variar de pessoa para pessoa. Consulte seu médico antes de usar. Venda restrita para maiores de 18 anos.
              Mantenha fora do alcance de crianças.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
