const emailToogleMenu=document.querySelector('.navbar-email')
const desktopMenu=document.querySelector('.desktop-menu')
const burgerToogleMenu=document.querySelector('.menu')
const mobileMenu=document.querySelector('.mobile-menu')
const cartToogleMenu=document.querySelector('.navbar-shopping-cart')
const cardsContainer=document.querySelector('.cards-container')
const shoppingCartMenu=document.querySelector('#shoppingCartContainer')
const bodyContainer=document.querySelector('.body')
const productDetailCloser=document.querySelector('.product-detail-close')
const productInfoContainer=document.getElementsByClassName('productCardGeneral')


// class ProductInfo{
//     constructor(title, subtitle, image, content, id){
//         this.title=title
//         this.subtitle=subtitle
//         this.image=image
//         this.content=content
//         this.uid=id
//     }

//     openProductDetailAside(){
//         console.log(this.uid)
//         let productCardClass=`.product-detail-${this.uid}`
//         console.log(productCardClass)
//         const productCardSelected=document.querySelector(productCardClass)
//         productCardSelected.classList.toggle("inactive")
//         mobileMenu.classList.add("inactive")
//         desktopMenu.classList.add("inactive")    
//         shoppingCartMenu.classList.add("inactive")
        
         
//     }

// }

    // class ProductList{
    //     constructor(){
    //         this.productList=[]
    //     }
    //     newProduct(title, subtitle, image, content, id){
    //         let p = new ProductInfo(title, subtitle, image, content, id)
    //         this.productList.push(p)
    //         return p
    //     }
    //     get getList(){
    //         return this.productList
    //     }
    //     get numberOfProducts(){
    //         return this.productList.length
    //     }
    // }

    // let allProductsInfo=new ProductList()
    // p1=new ProductInfo(
    // "Medicamentos prohibidos",
    // "Conoce qué medicamentos y sustancias no debes tomar durante el embarazo",
    // "https://images.pexels.com/photos/5207306/pexels-photo-5207306.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" ,
    // `En primer lugar, es importante que siempre consultes con tu médico o profesional de la salud antes de tomar cualquier medicamento durante el embarazo. Aunque hay algunos medicamentos que están prohibidos en ciertos trimestres del embarazo, esto puede variar según tu situación médica y la de tu bebé.

    // Dicho esto, aquí hay una guía general sobre algunos medicamentos que se consideran inseguros en cada trimestre del embarazo:
    
    // Primer trimestre: Durante este período crítico de desarrollo fetal, se deben evitar la mayoría de los medicamentos. Algunos de los medicamentos que se deben evitar incluyen:
    
    // Retinoides orales: estos medicamentos se usan comúnmente para tratar el acné y la psoriasis, pero pueden ser teratogénicos, lo que significa que pueden dañar al feto en desarrollo.
    
    // AINEs: Los medicamentos antiinflamatorios no esteroideos (AINEs), como el ibuprofeno, deben evitarse en el primer trimestre, ya que se ha demostrado que aumentan el riesgo de aborto espontáneo y malformaciones fetales.
    
    // Tetraciclinas: Estos antibióticos se utilizan para tratar una amplia variedad de infecciones, pero pueden interferir con el desarrollo óseo del feto.
    
    // Segundo trimestre: Durante este período, muchos medicamentos que antes estaban prohibidos pueden ser utilizados de forma segura bajo supervisión médica. Sin embargo, aún se deben evitar algunos medicamentos, incluyendo:
    
    // Algunos AINEs: Aunque los AINEs se consideran seguros después del primer trimestre, algunos estudios han demostrado que pueden aumentar el riesgo de complicaciones en el embarazo, incluyendo el parto prematuro.
    
    // Algunos antibióticos: Mientras que algunos antibióticos son seguros durante el embarazo, otros, como las fluoroquinolonas, pueden dañar al feto en desarrollo.
    
    // Tercer trimestre: Durante este período, el feto está cerca de la madurez y la mayoría de los medicamentos son seguros de usar. Sin embargo, aún hay algunos medicamentos que deben evitarse, incluyendo:
    
    // AINEs: Aunque la mayoría de los AINEs son seguros después del primer trimestre, todavía pueden aumentar el riesgo de complicaciones durante el parto, como hemorragia y prolongación del trabajo de parto.
    
    // Algunos medicamentos para el dolor: Algunos analgésicos, como la codeína y la oxicodona, pueden causar problemas respiratorios en el recién nacido si se usan cerca del momento del parto.
    
    // Es importante recordar que estos son solo algunos ejemplos de los medicamentos que deben evitarse durante ciertos trimestres del embarazo, y que cada mujer embarazada es diferente. Siempre debes hablar con tu médico antes de tomar cualquier medicamento para asegurarte de que es seguro para ti y tu bebé en desarrollo.`,
    // 'med',
    // )

    // p2=new ProductInfo(
    //         "Análisis de sangre",
    //         "Conoce más sobre tus laboratorios",
    //         "https://images.pexels.com/photos/954585/pexels-photo-954585.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" ,
    //         `Durante el embarazo, es importante que te realices los análisis de sangre que los médicos te pidan. Estos análisis son esenciales para garantizar que tanto tú como tu bebé estén sanos y para detectar cualquier problema de salud que pueda surgir durante el embarazo.
        
    //         Aquí hay algunas razones importantes por las que debes realizarte los análisis de sangre durante el embarazo:
            
    //         Detectar posibles problemas de salud: Los análisis de sangre pueden detectar posibles problemas de salud tanto para ti como para tu bebé en desarrollo. Por ejemplo, se pueden realizar análisis para detectar la presencia de enfermedades de transmisión sexual, anemia, diabetes gestacional y otras afecciones médicas.
            
    //         Monitorear el desarrollo del feto: Algunos análisis de sangre pueden ayudar a monitorear el desarrollo del feto en el útero, como el análisis de alfafetoproteína (AFP). Este análisis se realiza para detectar posibles problemas de desarrollo del feto, como defectos del tubo neural.
            
    //         Prepararse para el parto: Los análisis de sangre también son importantes para prepararte para el parto. Los médicos pueden usar los resultados de tus análisis de sangre para determinar si necesitas una transfusión de sangre durante el parto o si necesitas recibir tratamiento para prevenir la transmisión de enfermedades al bebé.
            
    //         Evaluar la salud materna: Los análisis de sangre pueden ayudar a evaluar la salud materna durante el embarazo, lo que es especialmente importante si tienes alguna afección médica preexistente. Los análisis de sangre pueden detectar si tu cuerpo está produciendo suficientes glóbulos rojos y blancos, si tus niveles de azúcar en la sangre son estables y si tienes suficientes nutrientes esenciales para mantener la salud materna y fetal.
            
    //         En resumen, los análisis de sangre son una parte importante del cuidado prenatal y pueden ayudar a detectar posibles problemas de salud tanto para ti como para tu bebé. Asegúrate de preguntar a tu médico si tienes alguna pregunta o inquietud sobre los análisis de sangre que te solicitan durante el embarazo.`,
    //         'blood', 
    // )

productList=[]
// productList.push(p1,p2)

productList.push({
    title: "Medicamentos prohibidos",
    subtitle: "Conoce qué medicamentos y sustancias no debes tomar durante el embarazo",
    image: "https://images.pexels.com/photos/5207306/pexels-photo-5207306.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" ,
    content: `En primer lugar, es importante que siempre consultes con tu médico o profesional de la salud antes de tomar cualquier medicamento durante el embarazo. Aunque hay algunos medicamentos que están prohibidos en ciertos trimestres del embarazo, esto puede variar según tu situación médica y la de tu bebé.

    Dicho esto, aquí hay una guía general sobre algunos medicamentos que se consideran inseguros en cada trimestre del embarazo:
    
    Primer trimestre: Durante este período crítico de desarrollo fetal, se deben evitar la mayoría de los medicamentos. Algunos de los medicamentos que se deben evitar incluyen:
    
    Retinoides orales: estos medicamentos se usan comúnmente para tratar el acné y la psoriasis, pero pueden ser teratogénicos, lo que significa que pueden dañar al feto en desarrollo.
    
    AINEs: Los medicamentos antiinflamatorios no esteroideos (AINEs), como el ibuprofeno, deben evitarse en el primer trimestre, ya que se ha demostrado que aumentan el riesgo de aborto espontáneo y malformaciones fetales.
    
    Tetraciclinas: Estos antibióticos se utilizan para tratar una amplia variedad de infecciones, pero pueden interferir con el desarrollo óseo del feto.
    
    Segundo trimestre: Durante este período, muchos medicamentos que antes estaban prohibidos pueden ser utilizados de forma segura bajo supervisión médica. Sin embargo, aún se deben evitar algunos medicamentos, incluyendo:
    
    Algunos AINEs: Aunque los AINEs se consideran seguros después del primer trimestre, algunos estudios han demostrado que pueden aumentar el riesgo de complicaciones en el embarazo, incluyendo el parto prematuro.
    
    Algunos antibióticos: Mientras que algunos antibióticos son seguros durante el embarazo, otros, como las fluoroquinolonas, pueden dañar al feto en desarrollo.
    
    Tercer trimestre: Durante este período, el feto está cerca de la madurez y la mayoría de los medicamentos son seguros de usar. Sin embargo, aún hay algunos medicamentos que deben evitarse, incluyendo:
    
    AINEs: Aunque la mayoría de los AINEs son seguros después del primer trimestre, todavía pueden aumentar el riesgo de complicaciones durante el parto, como hemorragia y prolongación del trabajo de parto.
    
    Algunos medicamentos para el dolor: Algunos analgésicos, como la codeína y la oxicodona, pueden causar problemas respiratorios en el recién nacido si se usan cerca del momento del parto.
    
    Es importante recordar que estos son solo algunos ejemplos de los medicamentos que deben evitarse durante ciertos trimestres del embarazo, y que cada mujer embarazada es diferente. Siempre debes hablar con tu médico antes de tomar cualquier medicamento para asegurarte de que es seguro para ti y tu bebé en desarrollo.`,
    id: 'med',
    openProductDetailAside(){
                closeProductDetailAside()

        closeProductDetailAside()
        const productCardClass='.product-detail-med'
        const productCardSelected=document.querySelector(productCardClass)
        productCardSelected.classList.toggle("inactive")
        mobileMenu.classList.add("inactive")
        desktopMenu.classList.add("inactive")    
        shoppingCartMenu.classList.add("inactive") 
        
        window.scrollTo(0, 0);
    },
})
productList.push({
    title: "Análisis de sangre",
    subtitle: "Conoce más sobre tus laboratorios",
    image: "https://images.pexels.com/photos/954585/pexels-photo-954585.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" ,
    content: `Durante el embarazo, es importante que te realices los análisis de sangre que los médicos te pidan. Estos análisis son esenciales para garantizar que tanto tú como tu bebé estén sanos y para detectar cualquier problema de salud que pueda surgir durante el embarazo.

    Aquí hay algunas razones importantes por las que debes realizarte los análisis de sangre durante el embarazo:
    
    Detectar posibles problemas de salud: Los análisis de sangre pueden detectar posibles problemas de salud tanto para ti como para tu bebé en desarrollo. Por ejemplo, se pueden realizar análisis para detectar la presencia de enfermedades de transmisión sexual, anemia, diabetes gestacional y otras afecciones médicas.
    
    Monitorear el desarrollo del feto: Algunos análisis de sangre pueden ayudar a monitorear el desarrollo del feto en el útero, como el análisis de alfafetoproteína (AFP). Este análisis se realiza para detectar posibles problemas de desarrollo del feto, como defectos del tubo neural.
    
    Prepararse para el parto: Los análisis de sangre también son importantes para prepararte para el parto. Los médicos pueden usar los resultados de tus análisis de sangre para determinar si necesitas una transfusión de sangre durante el parto o si necesitas recibir tratamiento para prevenir la transmisión de enfermedades al bebé.
    
    Evaluar la salud materna: Los análisis de sangre pueden ayudar a evaluar la salud materna durante el embarazo, lo que es especialmente importante si tienes alguna afección médica preexistente. Los análisis de sangre pueden detectar si tu cuerpo está produciendo suficientes glóbulos rojos y blancos, si tus niveles de azúcar en la sangre son estables y si tienes suficientes nutrientes esenciales para mantener la salud materna y fetal.
    
    En resumen, los análisis de sangre son una parte importante del cuidado prenatal y pueden ayudar a detectar posibles problemas de salud tanto para ti como para tu bebé. Asegúrate de preguntar a tu médico si tienes alguna pregunta o inquietud sobre los análisis de sangre que te solicitan durante el embarazo.`,
    id: 'blood',
    openProductDetailAside(){
                closeProductDetailAside()

        const productCardClass='.product-detail-blood'
        const productCardSelected=document.querySelector(productCardClass)
        productCardSelected.classList.toggle("inactive")
        mobileMenu.classList.add("inactive")
        desktopMenu.classList.add("inactive")    
        shoppingCartMenu.classList.add("inactive")
         window.scrollTo(0, 0);

    }
})
productList.push({
    title: "Ultrasonido obstétrico",
    subtitle: "Desubre en qué momentos debe realizarse y qué puedes encontrar",
    image: "https://images.pexels.com/photos/7089623/pexels-photo-7089623.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" ,
    content: `Los ultrasonidos obstétricos son una herramienta importante que los médicos utilizan para monitorear la salud de tu bebé y para asegurarse de que tu embarazo esté progresando adecuadamente. Estos son algunos de los motivos por los que los ultrasonidos obstétricos son importantes:

    Comprobar el crecimiento y la salud del feto: Los ultrasonidos obstétricos permiten al médico comprobar el tamaño, peso y posición del feto en el útero, y detectar cualquier problema de salud que pueda afectar el desarrollo del feto. También se puede verificar si el feto está recibiendo suficiente oxígeno y nutrientes, lo que es crucial para su crecimiento y desarrollo.
    
    Detectar problemas temprano: Los ultrasonidos obstétricos permiten detectar problemas potenciales en el embarazo temprano, lo que puede ayudar a prevenir complicaciones o intervenir antes de que se produzcan. Por ejemplo, se pueden detectar problemas de salud tales como la placenta previa, el desprendimiento prematuro de placenta, los problemas cardíacos fetales y otros.
    
    Verificar la salud del cuello uterino y de los órganos reproductivos: Los ultrasonidos obstétricos pueden comprobar el cuello uterino y los órganos reproductivos de la madre para detectar cualquier problema o anomalía que pueda afectar el embarazo o el parto.
    
    Proporcionar información para el parto: Los ultrasonidos obstétricos pueden proporcionar información importante sobre la posición del feto y el tamaño de la pelvis de la madre, lo que puede ayudar a determinar el tipo de parto que será más seguro y efectivo para ti y tu bebé.
    
    En resumen, los ultrasonidos obstétricos son importantes para monitorear la salud del feto y detectar problemas temprano, lo que puede ayudar a prevenir complicaciones y garantizar un embarazo y parto saludable. Si tienes alguna pregunta o inquietud sobre los ultrasonidos obstétricos, asegúrate de hablar con tu médico.`,
    id: 'ultrasound',
    openProductDetailAside(){
                closeProductDetailAside()

        const productCardClass='.product-detail-ultrasound'
        const productCardSelected=document.querySelector(productCardClass)
        productCardSelected.classList.toggle("inactive")
        mobileMenu.classList.add("inactive")
        desktopMenu.classList.add("inactive")    
        shoppingCartMenu.classList.add("inactive")
         window.scrollTo(0, 0);  
    },
})
productList.push({
    title: "Cambios en el estilo de vida",
    subtitle: "¿Qué cambios puedo hacer en mi para que mi bebé esté feliz y sano?",
    image: "https://images.pexels.com/photos/414262/pexels-photo-414262.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" ,
    content: `Durante el embarazo, es importante que las mujeres adopten un estilo de vida saludable para asegurar su propia salud y la del feto. Algunos de los principales cambios en el estilo de vida recomendados para una mujer embarazada incluyen:

    Alimentación saludable: Las mujeres embarazadas deben asegurarse de obtener una nutrición adecuada para apoyar el crecimiento y desarrollo del feto. Se recomienda una dieta equilibrada que incluya una variedad de alimentos ricos en nutrientes, como frutas, verduras, proteínas magras y grasas saludables.
    
    Control del peso: Es importante que las mujeres embarazadas controlen su peso durante el embarazo. El aumento de peso recomendado puede variar según la edad gestacional de la paciente y su índice de masa corporal antes del embarazo.
    
    Actividad física: Las mujeres embarazadas deben mantenerse activas durante el embarazo siempre y cuando no tengan contraindicaciones médicas. El ejercicio regular puede ayudar a mantener una buena salud y disminuir el riesgo de complicaciones durante el embarazo y el parto. Se recomienda consultar con el médico antes de comenzar cualquier programa de ejercicio.
    
    Abstinencia de drogas, tabaco y alcohol: Las mujeres embarazadas deben evitar el consumo de drogas, tabaco y alcohol durante el embarazo, ya que pueden tener efectos negativos en el desarrollo fetal.
    
    Sueño adecuado: Las mujeres embarazadas deben asegurarse de obtener suficiente descanso y sueño de calidad durante el embarazo para mantener su salud física y mental.
    
    Manejo del estrés: El embarazo puede ser un momento emocionalmente estresante para las mujeres, por lo que es importante que aprendan a manejar el estrés y la ansiedad de manera efectiva. Se pueden utilizar técnicas como la meditación, el yoga o la terapia de conversación para ayudar a manejar el estrés durante el embarazo.
    
    Cuidado prenatal regular: Las mujeres embarazadas deben asistir regularmente a las citas de cuidado prenatal para monitorear su salud y la del feto, recibir pruebas y recibir educación sobre el embarazo y el parto.`,
    id: 'lifestyle',
    openProductDetailAside(){
                closeProductDetailAside()

        closeProductDetailAside()
        const productCardClass='.product-detail-lifestyle'
        const productCardSelected=document.querySelector(productCardClass)
        productCardSelected.classList.toggle("inactive")
        mobileMenu.classList.add("inactive")
        desktopMenu.classList.add("inactive")    
        shoppingCartMenu.classList.add("inactive")
         window.scrollTo(0, 0);  
    },
})
productList.push({
    title: "Monitoreo fetal",
    subtitle: "Descubre cómo conocer si tu bebé está bien en todo momento",
    image: "https://images.pexels.com/photos/5853667/pexels-photo-5853667.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" ,
    content: `El automonitoreo fetal es una forma importante de monitorear la salud de tu bebé en el útero. Aquí te presento algunos consejos para realizar el automonitoreo fetal:

    Conoce los movimientos de tu bebé: Es importante que aprendas a reconocer los patrones de movimiento de tu bebé. Esto te ayudará a identificar cualquier cambio en los patrones de movimiento que puedan indicar un problema de salud. La mayoría de los bebés tienen períodos de actividad y descanso, por lo que es importante que observes los movimientos de tu bebé durante todo el día.
    
    Encuentra un lugar tranquilo y relajado: Encuentra un lugar tranquilo y relajado para realizar el automonitoreo fetal. A menudo, un ambiente tranquilo y relajado puede estimular a tu bebé a moverse.
    
    Acuéstate de lado izquierdo: Acuéstate de lado izquierdo para realizar el automonitoreo fetal. Esto ayuda a mejorar la circulación sanguínea y el flujo de oxígeno hacia el útero.
    
    Usa una aplicación o un monitor fetal: Existen aplicaciones o monitores fetales que pueden ayudarte a realizar el automonitoreo fetal. Estos dispositivos pueden ser útiles para registrar los patrones de movimiento y los latidos del corazón de tu bebé.
    
    Es importante recordar que el automonitoreo fetal no sustituye el cuidado prenatal regular y los controles médicos. Si tienes alguna preocupación sobre la salud de tu bebé, asegúrate de comunicarte con tu médico de inmediato.
    
    En general, se recomienda que las mujeres embarazadas realicen el automonitoreo fetal a partir de las 28 semanas de embarazo, aunque tu médico puede recomendarte que lo hagas antes si hay algún problema en el embarazo. Si tienes alguna pregunta sobre el automonitoreo fetal, asegúrate de hablar con tu médico.`,
    id: 'fetal-monitoring',
    openProductDetailAside(){
                closeProductDetailAside()

        const productCardClass='.product-detail-fetal-monitoring'
        const productCardSelected=document.querySelector(productCardClass)
        productCardSelected.classList.toggle("inactive")
        mobileMenu.classList.add("inactive")
        desktopMenu.classList.add("inactive")    
        shoppingCartMenu.classList.add("inactive")
         window.scrollTo(0, 0);  
    },
})
productList.push({
    title: "Preguntas frecuentes",
    subtitle: "Analiza las respuestas a las preguntas más frecuentes",
    image: "https://images.pexels.com/photos/6991905/pexels-photo-6991905.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" ,
    content: `Las preguntas que suelen ser más frecuentes en las pacientes primerizas durante su primer embarazo pueden variar, pero aquí te presento algunas de las preguntas más comunes y sus respuestas:

    ¿Cómo puedo saber si mi embarazo está progresando bien?
    Para saber si tu embarazo está progresando adecuadamente, es importante que te realices los controles prenatales recomendados por tu médico. En estos controles, el médico medirá la presión arterial, el peso, la altura uterina, escuchará el corazón del bebé y realizará pruebas de laboratorio. Además, debes observar cualquier cambio en tu cuerpo, como dolor abdominal, sangrado vaginal, cambios en los movimientos del bebé, entre otros. Si tienes alguna inquietud, comunícate con tu médico.
    
    ¿Cómo puedo controlar los síntomas del embarazo como las náuseas, los vómitos y la fatiga?
    Durante el embarazo, es común experimentar síntomas como náuseas, vómitos y fatiga. Para controlar estos síntomas, es importante que sigas una dieta equilibrada, hagas ejercicio suave y te asegures de dormir lo suficiente. También puedes probar métodos como la acupuntura, la meditación o la terapia cognitivo-conductual para aliviar el estrés y mejorar tu bienestar emocional.
    
    ¿Qué puedo hacer para prevenir las estrías y otros cambios en la piel?
    Durante el embarazo, es común experimentar cambios en la piel, como estrías, manchas y acné. Para prevenir las estrías, es importante que hidrates la piel con regularidad, bebas suficiente agua y sigas una dieta saludable y equilibrada. También es recomendable evitar el exceso de exposición al sol y usar protector solar. Si tienes dudas, consulta con tu dermatólogo.
    
    ¿Cómo puedo prepararme para el parto?
    Es importante prepararte para el parto con anticipación, esto puede incluir tomar clases de preparación para el parto, hacer ejercicios de respiración y relajación, y leer sobre los diferentes tipos de parto. También es recomendable hablar con tu médico sobre tus opciones y preferencias para el parto, como el uso de medicamentos para el dolor y la posibilidad de un parto natural o cesárea.
    
    ¿Cómo puedo garantizar la salud de mi bebé?
    Para garantizar la salud de tu bebé, es importante que sigas una dieta saludable y equilibrada, te ejercites de forma regular, evites fumar y beber alcohol y te asegures de dormir lo suficiente. También es importante que asistas a todos los controles prenatales recomendados por tu médico y sigas sus recomendaciones. Si tienes alguna inquietud o preocupación, comunícate con tu médico de inmediato.
    
    Espero que estas respuestas hayan sido útiles para ti. Recuerda que si tienes alguna otra pregunta o inquietud, siempre puedes comunicarte con tu médico para obtener más información y asesoramiento.`,
    id: 'faq',
    openProductDetailAside(){
                closeProductDetailAside()

        const productCardClass='.product-detail-faq'
        const productCardSelected=document.querySelector(productCardClass)
        productCardSelected.classList.toggle("inactive")
        mobileMenu.classList.add("inactive")
        desktopMenu.classList.add("inactive")    
        shoppingCartMenu.classList.add("inactive")
         window.scrollTo(0, 0);  
    },
})
productList.push({
    title: "Violencia doméstica",
    subtitle: "Si sufres cualquier forma de violencia en casa, esto podría serte útil",
    image: "https://images.pexels.com/photos/3802075/pexels-photo-3802075.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" ,
    content: `La violencia doméstica se refiere a cualquier forma de abuso que ocurre dentro de una relación íntima o familiar. Puede incluir violencia física, emocional, sexual, financiera y psicológica.

    Si una madre primeriza está experimentando violencia doméstica, es importante buscar ayuda de inmediato. Hay muchas organizaciones y recursos disponibles que pueden brindar apoyo y asistencia en este tipo de situaciones. Puede hablar con su médico o profesional de la salud de confianza, buscar ayuda de una organización local que brinde servicios de apoyo a las víctimas de violencia doméstica, o contactar una línea directa de ayuda para obtener asesoramiento y apoyo.
    
    Es importante que la madre primeriza sepa que la violencia doméstica no es su culpa y que merece vivir en un ambiente seguro y libre de violencia. Es crucial que la madre primeriza reciba apoyo y asesoramiento para salir de una situación de violencia doméstica y crear un plan de seguridad para ella y su bebé.`,
    id: 'violence',
    openProductDetailAside(){
                closeProductDetailAside()

        const productCardClass='.product-detail-violence'
        const productCardSelected=document.querySelector(productCardClass)
        productCardSelected.classList.toggle("inactive")
        mobileMenu.classList.add("inactive")
        desktopMenu.classList.add("inactive")    
        shoppingCartMenu.classList.add("inactive")
         window.scrollTo(0, 0);  
    },
})
productList.push({
    title: "Planificación familiar",
    subtitle: "Descubre el método para no embarazarte ideal para tí",
    image: "https://degrees.fhi360.org/wp-content/uploads/2022/11/blog-fp-22-square-850X567.jpg" ,
    content: `Los métodos de planificación familiar son técnicas o dispositivos que se utilizan para prevenir o posponer el embarazo. El uso de métodos de planificación familiar puede ser importante para las mujeres y las parejas que desean espaciar sus embarazos o limitar su tamaño, o para aquellas que necesitan controlar el momento de su embarazo por motivos médicos.

    Entre los métodos de planificación familiar más importantes se encuentran:
    
    Anticonceptivos hormonales: estos métodos incluyen la píldora anticonceptiva, parches, anillos vaginales, inyecciones, implantes y dispositivos intrauterinos (DIU) con hormonas. Son altamente efectivos si se usan correctamente y son convenientes ya que no requieren una acción inmediata antes del coito.
    
    Dispositivos intrauterinos (DIU) sin hormonas: estos son dispositivos pequeños en forma de T que se insertan en el útero para prevenir el embarazo. Son altamente efectivos y pueden durar varios años.
    
    Esterilización: este es un método permanente de planificación familiar que puede realizarse en hombres y mujeres. En los hombres se llama vasectomía y en las mujeres se llama ligadura de trompas.
    
    La elección del método de planificación familiar dependerá de varios factores, como la salud general, el historial médico y los antecedentes personales de cada paciente. Es importante hablar con un profesional de la salud para determinar el método de planificación familiar más adecuado y seguro para cada paciente.`,
    id: 'family-planning',
    openProductDetailAside(){
                closeProductDetailAside()

        const productCardClass='.product-detail-family-planning'
        const productCardSelected=document.querySelector(productCardClass)
        productCardSelected.classList.toggle("inactive")
        mobileMenu.classList.add("inactive")
        desktopMenu.classList.add("inactive")    
        shoppingCartMenu.classList.add("inactive")
         window.scrollTo(0, 0);  
    },
})

/* 

<div class="product-card">
<img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="">
<div class="product-info">
  <div>
    <p>$120,00</p>
    <p>Bike</p>
  </div>
  <figure>
    <img src="./icons/bt_add_to_cart.svg" alt="">
  </figure>
</div>
</div> 

*/


function renderProducts(arr){
    for(product of arr){
    const productCard=document.createElement('div')
    productCard.classList.add('product-card')

    const productImg=document.createElement('img')
    productImg.setAttribute('src',product.image)
    productImg.addEventListener('click',product.openProductDetailAside)
    
    const productInfo=document.createElement('div')
    productInfo.classList.add('product-info')
    
    
    const productName=document.createElement('p')
    productName.innerText=product.subtitle
    const productPrice=document.createElement('p')
    productPrice.innerText=product.title
    
    const productInfoDiv=document.createElement('div')
    productInfoDiv.append(productPrice,productName)
    const productInfoFigure=document.createElement('figure')
    const productImgCart=document.createElement('img')
    productImgCart.setAttribute('src','./assets/icons/heart.svg')
    
    productInfoFigure.appendChild(productImgCart)
    productInfo.append(productInfoDiv,productInfoFigure)

    productCard.append(productImg,productInfo)
    cardsContainer.appendChild(productCard)
}}


/* <aside id="product-detail"> 
 
 <div class="product-detail-close">
   <img src="./assets/icons/icon_close.png" alt="close">
 </div>
 <img src="https://taracoleman.com/wp-content/uploads/2012/09/pexels-photo-414262-700x1024.jpeg" alt="Plato de comida">
 <div class="product-info">
   <p>Cambios en el estilo de vida</p>
   <p>Durante el embarazo, es importante que las mujeres adopten un estilo de vida saludable para asegurar su propia salud y la del feto. Algunos de los principales cambios en el estilo de vida recomendados para una mujer embarazada incluyen:

       Alimentación saludable: Las mujeres embarazadas deben asegurarse de obtener una nutrición adecuada para apoyar el crecimiento y desarrollo del feto. Se recomienda una dieta equilibrada que incluya una variedad de alimentos ricos en nutrientes, como frutas, verduras, proteínas magras y grasas saludables.
       
       Control del peso: Es importante que las mujeres embarazadas controlen su peso durante el embarazo. El aumento de peso recomendado puede variar según la edad gestacional de la paciente y su índice de masa corporal antes del embarazo.
       
       Actividad física: Las mujeres embarazadas deben mantenerse activas durante el embarazo siempre y cuando no tengan contraindicaciones médicas. El ejercicio regular puede ayudar a mantener una buena salud y disminuir el riesgo de complicaciones durante el embarazo y el parto. Se recomienda consultar con el médico antes de comenzar cualquier programa de ejercicio.
       
       Abstinencia de drogas, tabaco y alcohol: Las mujeres embarazadas deben evitar el consumo de drogas, tabaco y alcohol durante el embarazo, ya que pueden tener efectos negativos en el desarrollo fetal.
       
       Sueño adecuado: Las mujeres embarazadas deben asegurarse de obtener suficiente descanso y sueño de calidad durante el embarazo para mantener su salud física y mental.
       
       Manejo del estrés: El embarazo puede ser un momento emocionalmente estresante para las mujeres, por lo que es importante que aprendan a manejar el estrés y la ansiedad de manera efectiva. Se pueden utilizar técnicas como la meditación, el yoga o la terapia de conversación para ayudar a manejar el estrés durante el embarazo.
       
       Cuidado prenatal regular: Las mujeres embarazadas deben asistir regularmente a las citas de cuidado prenatal para monitorear su salud y la del feto, recibir pruebas y recibir educación sobre el embarazo y el parto.</p>
   <button class="primary-button add-to-cart-button">
     <img src="./assets/icons/check-circle.svg" alt="Leído">
     Marcar como leído
   </button>
 </div>
</aside>  */

function renderInfo(arr){
    for(product of arr){
    
        //Aside
        const productCardClass='product-detail-'+product.id
        const asideInfo=document.createElement('aside')
        asideInfo.classList.add('productCardGeneral')
        asideInfo.classList.add(productCardClass)
        closeProductDetailAside()
        
        
        //Div Close
        const productCardCloseClass='product-detail-close-'+product.id
        const divClose=document.createElement('div')
        divClose.classList.add(productCardCloseClass)
        divClose.classList.add('product-detail-close')
        
        //Img Close
        const imgClose=document.createElement('img')
        imgClose.setAttribute('src','./assets/icons/icon_close.png')
        divClose.addEventListener('click',closeProductDetailAside)
    
        divClose.appendChild(imgClose)
    
        //Img General
        const imgInfo=document.createElement('img')
        imgInfo.setAttribute('src',product.image)
        imgInfo.classList.add('productInfoImage')
        
        //Div Information
        const divInfo=document.createElement('div')
        divInfo.classList.add('product-info')
        
        //p Information
        const pInfoTitle=document.createElement('p')
        pInfoTitle.innerText=product.title
        pInfoTitle.classList.add('productInfoTitle')
        const pInfoContent=document.createElement('p')
        pInfoContent.innerText=product.content
        pInfoContent.classList.add('productInfoContent')
        
        divInfo.append(pInfoTitle,pInfoContent)
        
        //Final Button
        const infoButton=document.createElement('button')
        infoButton.classList.add('primary-button')
        infoButton.classList.add('add-to-cart-button')
        const infoCheckImg=document.createElement('img')
        infoCheckImg.setAttribute('src','./assets/icons/check-circle.svg')
        const pButton=document.createElement('p')
        pButton.innerText="Marcar como leído"
        pButton.classList.add('productInfoButton')
        
        infoButton.append(infoCheckImg,pButton)
        divInfo.appendChild(infoButton)
    
        //Agrego todo al aside
        asideInfo.append(divClose,imgInfo,divInfo)
        bodyContainer.appendChild(asideInfo)
        // productDetailCloser.addEventListener('click', closeProductDetailAside)
    
    }}

renderProducts(productList)
renderInfo(productList)



emailToogleMenu.addEventListener('click', toggleDesktopMenu)
burgerToogleMenu.addEventListener('click', toggleMobileMenu)
cartToogleMenu.addEventListener('click', toggleCartMenu)
// productDetailCloser.addEventListener('click', closeProductDetailAside)

function toggleDesktopMenu(){
    desktopMenu.classList.toggle("inactive")
    shoppingCartMenu.classList.add("inactive")
    closeProductDetailAside()

}
function toggleMobileMenu(){
    mobileMenu.classList.toggle("inactive")
    shoppingCartMenu.classList.add("inactive")
    closeProductDetailAside()

}
function toggleCartMenu(){
    shoppingCartMenu.classList.toggle("inactive")
    mobileMenu.classList.add("inactive")
    desktopMenu.classList.add("inactive")    
    closeProductDetailAside()

}



function closeProductDetailAside(){
    for (let item of productInfoContainer)
    item.classList.add('inactive')
}

closeProductDetailAside()

