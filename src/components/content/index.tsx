import { FunctionalComponent, h } from "preact";
import { useFela } from "preact-fela";
import { ContentStyle } from "./style";

const Content: FunctionalComponent = () => {
    const { css } = useFela();
    return (
        <div class={css(ContentStyle)}>
            <h1>Lorem ipsum dolor amend</h1>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                ac finibus lorem. Donec in tristique ipsum, a placerat diam.
                Orci varius natoque penatibus et magnis dis parturient montes,
                nascetur ridiculus mus. Curabitur euismod est sed dolor
                consequat congue. Curabitur lacus quam, scelerisque nec sapien
                id, cursus accumsan odio. In vitae fringilla dui. Pellentesque
                at varius massa, at elementum quam. Pellentesque mollis nunc at
                suscipit dignissim. Donec a tempus ante. Vestibulum hendrerit
                nisi mauris, in lacinia risus tristique commodo. In id eros
                hendrerit, maximus nulla a, vehicula sapien. Donec finibus augue
                volutpat magna ornare, egestas bibendum mi hendrerit. Ut
                pellentesque purus a ex sodales, et facilisis orci egestas. Sed
                mattis, enim cursus convallis vestibulum, lorem sem elementum
                mi, elementum lacinia est purus vitae nunc. Vivamus dapibus
                sapien mattis ligula ultrices, ut molestie turpis accumsan.
                Vestibulum in velit sem. Fusce magna nibh, sagittis quis
                vulputate a, molestie quis dolor. Nullam sit amet vehicula enim.
                Sed congue odio eu erat auctor, malesuada viverra velit
                pulvinar. Mauris orci enim, pharetra a enim id, molestie
                vehicula mauris. Suspendisse potenti. Nam bibendum mattis
                aliquam. Praesent elementum fringilla lobortis. Pellentesque
                habitant morbi tristique senectus et netus et malesuada fames ac
                turpis egestas. Etiam tempor, mauris in pellentesque pretium,
                felis dui faucibus quam, a vulputate ligula nunc quis erat. Duis
                varius eget lorem eu egestas. Ut id fringilla felis. In pretium
                elit a suscipit viverra. Nulla sodales aliquet nulla at
                vestibulum. Ut et orci nec diam mollis dignissim ut nec odio.
                Duis mollis diam eu lobortis volutpat. Fusce sagittis vestibulum
                ipsum id mollis. Quisque fermentum, mauris sed gravida cursus,
                turpis ligula elementum enim, vel eleifend justo neque non
                lacus. Nam commodo, erat eu condimentum mattis, ligula nisl
                pellentesque quam, sit amet viverra nulla urna et neque. Proin
                vel pretium orci. Sed at condimentum orci, in elementum augue.
                Suspendisse molestie nisl vitae fermentum maximus. Proin quis
                enim consequat, sodales lacus at, tristique metus. Etiam
                consectetur tristique ante, ut fermentum tellus ultrices quis.
                Vivamus ultrices et tortor at mattis. In hac habitasse platea
                dictumst. Vivamus porttitor magna sagittis, suscipit elit sit
                amet, tempus augue. Cras mi enim, vulputate sed est facilisis,
                egestas molestie sem. Ut semper nisl non quam finibus, pulvinar
                sollicitudin tellus ornare. Interdum et malesuada fames ac ante
                ipsum primis in faucibus. Nullam ac euismod arcu. Sed nec metus
                nec diam sollicitudin consequat non non sem. Cras lobortis neque
                leo, quis tincidunt lectus lacinia quis. Sed consectetur dictum
                arcu, nec fringilla odio faucibus vitae. Mauris vel turpis id
                ipsum viverra dictum vitae a diam. Ut bibendum, lorem vel
                rhoncus aliquam, quam quam rhoncus libero, vitae dictum lectus
                felis vitae metus. Nam sit amet mauris ac sem interdum accumsan
                feugiat ut lectus. Mauris sagittis nisi et hendrerit molestie.
                Praesent vitae aliquet ex. Lorem ipsum dolor sit amet,
                consectetur adipiscing elit. Etiam et dignissim nisi. Duis
                gravida, augue sed commodo posuere, neque leo maximus mauris, id
                sagittis nibh tellus at neque. Phasellus venenatis nulla sapien,
                volutpat interdum sapien ultrices et. Suspendisse mollis a mi
                non varius. Quisque congue cursus ligula, eu mattis mi tempus a.
                Mauris id odio diam. In mollis pulvinar massa, et elementum
                libero semper non. Quisque vitae auctor sem, nec bibendum magna.
                Nam consectetur, ante id tristique molestie, risus tellus tempor
                ex, sit amet varius sem lacus non felis. Donec varius felis sem,
                id mollis magna bibendum eget. Donec rhoncus magna et diam
                pharetra molestie nec a purus. Morbi at tincidunt velit, nec
                fermentum urna. Praesent interdum euismod accumsan. Nam posuere
                posuere consectetur. Donec ante sem, pharetra ac diam eget,
                ultricies egestas quam.{" "}
            </p>
        </div>
    );
};

export default Content;
