import "./App.css";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { useAnimation } from "framer-motion";
function App() {
  const { ref, inView } = useInView({
    threshold: 0.2,
  });
  const animation = useAnimation();
  useEffect(() => {
    if (inView) {
      animation.start({
        x: 0,
        transition: {
          type: "spring",
          duration: 1,
          bounce: 0.3,
        },
      });
    }
    if (!inView) {
      animation.start({
        x: "-100vw",
        transition: {
          type: "spring",
          duration: 2,
        },
      });
    }
    console.log("use effect hoke, inView = ", inView);
  }, [inView, animation]);

  return (
    <>
      <div>
        <h1>Paragraph-1</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure sapiente
          inventore, iste aperiam eius amet nostrum possimus us nulla
          accusantium? Rerum, enim et inventore dolor vero qui quos totam, illum
          dicta maiores, ullam mollitia sapiente debitis aliquam laborum
          architecto. Vitae deleniti, accusamus quibusdam dolorum ducimus
          voluptas nemo deserunt fuga ea repellat iste commodi nihil. Iure quas
          provident quibusdam earum alias ipsa voluptate nisi totam excepturi
          odit numquam sunt expedita, error dolor non vel eum nulla aperiam
          neque? Quam porro aut veniam ipsam laudantium quis, ducimus recusandae
          asperiores commodi possimus minima in, nemo corrupti, laborum
          repudiandae? Sequi sed voluptates quos dolores dicta! Placeat sed
          mollitia exercitationem explicabo eveniet et iusto ratione distinctio
          eum asperiores dolor maxime, ullam dolorum non velit id fuga
          voluptatibus rem aspernatur, natus cumque ipsa illo, deleniti ut?
          Numquam maiores error ea harum veniam repellat corporis, magnam velit
          beatae fugiat? Exercitationem soluta itaque aperiam. Adipisci ut
          explicabo molestias, alias eaque ipsum veritatis! Debitis quasi
          quibusdam praesentium deleniti quo quos, dignissimos dolore iure.
          Laborum maxime ipsum qui fugiat reiciendis quae provident, modi sunt.
          Cum dolorum aspernatur tenetur voluptas voluptate provident nihil
          nostrum ab? Nostrum laboriosam laborum, dolorem expedita dignissimos
          doloremque ratione enim illum quod ipsum? Maxime accusamus incidunt
          quaerat nam suscipit aliquid, labore, corrupti laboriosam commodi,
          nostrum sit doloremque explicabo sint expedita repudiandae
          perspiciatis voluptatibus quod. Quo fugit expedita, fugiat sit,
          voluptate hic nihil odit quis explicabo quos eaque. Dignissimos ab et
          in harum praesentium assumenda at tenetur fugiat? Dicta, assumenda!
          Numquam ea excepturi provident enim consequatur dolor earum iusto
          accusamus sed facilis magnam, ullam atque corporis consectetur est
          quasi! Quaerat laborum tenetur quibusdam esse maiores, dignissimos
          temporibus ullam aliquid nesciunt ad laudantium molestiae tempore
          perferendis inventore, adipisci recusandae. Quo totam nemo quidem ex,
          labore earum ipsum ullam laboriosam repellat consequuntur eum
          explicabo aperiam, nisi voluptas est accusantium itaque illo laborum
          optio aut ut! Qui, modi tenetur. Maxime veritatis numquam obcaecati
          sint voluptates, eligendi dolor porro eius iure quaerat repudiandae
          voluptate, pariatur omnis adipisci aspernatur distinctio itaque ex
          perferendis vel commodi ducimus? Aperiam deleniti voluptas, dolore
          odio nisi id magnam mollitia rerum cum fugit debitis provident
          repellendus unde ipsam quidem facere quis animi qui adipisci hic iusto
          consectetur? Tempora non, reprehenderit itaque odit eos facere,
          exercitationem, eius quia accusantium beatae ullam? Delectus, tempore?
          Similique repellat laboriosam, blanditiis et officia facere
          voluptatem! Dolorum, ipsa necessitatibus molestias velit veritatis
          pariatur perspiciatis cupiditate aliquid ab consequatur, maiores
          quidem doloremque eos, suscipit nesciunt minima fugit nostrum! Commodi
          in similique laudantium. Iure, quo! Iste sequi, sed et excepturi
          laborum praesentium obcaecati nobis dolorum? Quis quod explicabo
          laboriosam hic quaerat quasi odit soluta saepe autem tenetur harum
          adipisci voluptas nesciunt magnam ad dolorem quisquam doloremque amet,
          vero veniam dignissimos? Id itaque labore dicta doloremque aliquid
          ducimus repudiandae consequuntur quidem voluptate voluptates. Qui
          cumque harum quo ipsa quis sint nobis ipsam, vero accusantium ea
          veniam non totam expedita at alias itaque? Corrupti voluptatibus
          molestias reiciendis vel labore veritatis voluptatem quia fugit quis
          quas iste voluptas minima suscipit libero vitae officia officiis
          blanditiis assumenda, quaerat sint iusto. Eveniet eius ab soluta aut
          magni! Similique obcaecati voluptatibus, ad error voluptate
          consequatur a, dolore nostrum accusantium reprehenderit aspernatur
          repellendus minima placeat possimus inventore tenetur! Quisquam
          aliquid, aliquam suscipit aut reprehenderit architecto libero placeat
          autem voluptatem optio nam consequatur consequuntur voluptatum! In
          voluptatem nisi repudiandae! Delectus nesciunt sunt, laboriosam
          voluptatem repudiandae iure quibusdam in nihil sit hic! Praesentium
          debitis exercitationem voluptas voluptate assumenda nihil minima
          vitae. Laudantium, vel atque deserunt perspiciatis enim, corporis
          dolorum iusto aspernatur delectus obcaecati quasi reiciendis illo
          libero praesentium quisquam! Rerum, deleniti! Obcaecati libero cum
          quod qui! Repellendus harum fugiat voluptas minus praesentium et
          consequuntur excepturi illum commodi soluta vitae delectus molestiae
          cum sequi recusandae, nostrum consequatur corporis rem ipsum omnis.
          Labore ea eos inventore aliquam excepturi sequi iusto officia quisquam
          reiciendis atque aspernatur error impedit velit, facilis ullam ratione
          nesciunt! Accusamus labore, eveniet eligendi, quod accusantium quia
          beatae vitae sed obcaecati error officia illo ratione expedita
          consectetur voluptatibus consequuntur cupiditate sit molestiae
          tenetur, incidunt ex odit non tempore qui! Doloribus molestiae,
          officiis ipsum quis temporibus nulla error eveniet adipisci
          repellendus sit natus magni a quisquam quos assumenda quidem,
          voluptates officia illo laboriosam quod. Est, facilis cupiditate ab
          magnam ut laboriosam quidem deserunt consequuntur iure odit itaque
          nemo error dolor possimus maiores incidunt quaerat esse, culpa sint
          fuga repudiandae, porro sit nulla? Saepe, quam! Inventore ex illum
          libero error, dolorum porro amet minima culpa provident, optio
          officia, maxime alias doloribus maiores cumque eaque consequuntur
          autem voluptatum! Nobis eum illum omnis totam, dolor nemo ad! Vitae
          quis illum impedit adipisci non reprehenderit fugit obcaecati debitis
          officia culpa reiciendis sunt pariatur eaque dignissimos velit
          similique blanditiis totam vero, laborum cumque earum consectetur
          deserunt ab fuga! Doloremque suscipit similique ex, autem eum placeat
          reiciendis quae soluta facilis. Quisquam iusto reprehenderit aliquam
          mollitia, sunt inventore, ipsam eos minima eligendi sequi architecto
          vel iste ea molestias adipisci autem officiis neque quidem, dolorum
          fugit dicta. Commodi possimus blanditiis minima laboriosam beatae rem,
          debitis perferendis cum inventore expedita culpa saepe. Molestias aut
          facilis asperiores quia eaque quod tempore magni odio possimus
          nesciunt quam, eligendi dolorum praesentium voluptatum, quo magnam
          laboriosam nobis, pariatur nihil omnis blanditiis autem corrupti
          laudantium? Libero in iure repudiandae obcaecati magni cum provident
          rerum eum, quisquam consectetur culpa perferendis animi, minus totam
          quae esse fugit quod? Dolor temporibus repellendus laboriosam eveniet,
          repudiandae cum nihil, culpa veritatis voluptatum libero deserunt
          quas, ipsum amet? Incidunt, maxime, suscipit quaerat sequi dicta
          perferendis voluptates fugit laudantium id maiores tempore cupiditate
          nihil dolores ea temporibus et tenetur facere itaque! Nesciunt,
          aspernatur repellendus. Dicta debitis repellendus reprehenderit autem
          temporibus quia. Nesciunt eaque ex tempora rem, facere dolore
          assumenda maiores magnam inventore odio a atque! Fugit exercitationem
          quos ea provident saepe consequatur, quidem animi, obcaecati velit
          voluptatibus, aliquid nihil praesentium? Tempora dicta alias earum
          ullam officia tenetur, itaque, quas asperiores labore eaque debitis
          placeat sed ab delectus inventore. Eveniet, praesentium! Fugiat culpa
          nobis mollitia rem doloremque iste numquam sit, repudiandae fuga
          aliquid aspernatur molestiae maxime voluptatem? Quis in eaque animi
          eius, adipisci ex debitis nemo voluptate minus, impedit iure. Ut eum
          iusto illo aliquid iste in delectus assumenda voluptate inventore!
          Doloribus natus, asperiores inventore eius debitis hic sapiente, nam
          quia possimus odio rerum minima sed earum repellat recusandae
          incidunt, quaerat quam eveniet atque velit reiciendis amet. Veritatis
          iusto delectus beatae asperiores suscipit blanditiis ipsa recusandae
          facere qui obcaecati illo maiores, voluptates voluptatum mollitia quod
          necessitatibus, minus harum vitae saepe nesciunt perspiciatis? Illo
          fuga aliquam debitis architecto blanditiis! Numquam laborum aliquid,
          voluptatum culpa excepturi officiis maiores nihil quasi est alias odio
          consequatur, asperiores natus voluptate at dignissimos explicabo
          quidem debitis pariatur fuga aspernatur enim. Explicabo cum at sunt
          sequi voluptas? Ab earum, libero tenetur nam alias vero fugit porro
          magni optio eos nihil suscipit ut. Impedit repellat harum ducimus
          facilis facere at architecto quasi quidem magnam optio? Explicabo
          praesentium iste tempora molestiae laboriosam incidunt necessitatibus
          numquam omnis expedita quos! Harum placeat iste adipisci expedita
          ullam autem, natus dolor quae aperiam corporis quis! Ex beatae optio
          iusto obcaecati fugit voluptas quibusdam quidem neque omnis
          voluptatibus nostrum amet officia iure voluptatum quas hic doloremque,
          natus quia. Officia error minima ipsum reiciendis facilis accusantium
          inventore adipisci corporis laborum ad? Recusandae suscipit dolorem,
          accusantium et similique atque dolores neque autem culpa minus quidem
          cum optio animi deleniti. Recusandae temporibus perspiciatis excepturi
          nemo, odio ea repellendus quae ad distinctio quia magni? Amet est
          expedita odit alias velit quae in placeat ipsa earum? Enim maxime esse
          eius, aspernatur, quae exercitationem obcaecati voluptatibus
          voluptates eum ullam debitis accusantium harum. Dicta, optio error
          assumenda iure modi praesentium perspiciatis? Expedita omnis illum
          ipsam error, repellendus, quis perferendis aut vel necessitatibus
          pariatur, esse itaque modi ab. Animi libero aut fugiat alias porro?
          Magnam velit quidem ea itaque quos, dolorum laudantium consectetur
          obcaecati praesentium eius architecto molestias amet blanditiis sed
          beatae dignissimos repudiandae. Ipsum odit fuga aspernatur
          reprehenderit, nulla architecto adipisci vitae voluptates, eligendi in
          dicta quisquam, doloribus libero perspiciatis. Similique culpa
          impedit, iure dolorem explicabo eveniet maiores qui aperiam expedita
          consequatur est quas fugiat autem? Delectus minus possimus tenetur
          amet dolores omnis ex, quasi obcaecati facilis? Ipsa vitae commodi
          iure similique alias atque nulla reiciendis nostrum in aliquid quod,
          quo provident deserunt iste, nemo accusantium odit perspiciatis
          debitis. Inventore magnam, laudantium, quae minima exercitationem
          incidunt numquam velit perferendis expedita esse ut eum tenetur fugit
          molestias, amet dolorum sed veritatis saepe deleniti temporibus
          excepturi blanditiis eveniet qui! Mollitia voluptatum, est dolores
          laboriosam a modi magnam illo iure maiores numquam architecto ab porro
          quisquam nobis possimus. Necessitatibus obcaecati, voluptatibus
          dignissimos qui, itaque suscipit quasi hic sint adipisci fugiat atque
          accusantium sequi mollitia neque ipsa, temporibus vitae dolores sed
        </p>
      </div>
      <div ref={ref}>
        <h1>Motion is here.</h1>
        <h1>Shyam</h1>

        <motion.div animate={animation}>
          <h1>Hello</h1>
          <h1>Hello</h1>
          <h1>Shyam</h1>
          <h1>Hello</h1>
          <h1>Hello</h1>
          <h1>Hello</h1>
          <h1>Hello</h1>
          <h1>Hello</h1>
          <h1>Hello</h1>
          <h1>Hello</h1>
          <h1>Hello</h1>
          <h1>Hello</h1>
          <h1>Hello</h1>
          <h1>Hello</h1>
          <h1>Hello</h1>
          <h1>Hello</h1>
          <h1>Hello</h1>
          <h1>Hello</h1>
          <h1>Hello</h1>
          <h1>Hello</h1>
          <h1>Hello</h1>
          <h1>Hello</h1>
        </motion.div>
      </div>
    </>
  );
}

export default App;
