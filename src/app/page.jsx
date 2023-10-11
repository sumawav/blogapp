import Link from 'next/link';
import styles from './homepage.module.css';

export default function Home() {
    return (
        <div>
            <Link href="/">
                <h1>
                    Nulla sollicitudin luctus malesuada. Donec in urna massa.
                    Etiam ac diam in augue lacinia tincidunt at eget risus.
                    Nullam ac fermentum ante. Vestibulum ante ipsum primis in
                    faucibus orci luctus et ultrices posuere cubilia curae;
                </h1>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse consequat mollis ligula vitae suscipit. Morbi
                maximus vitae tellus ut porta. Vivamus et quam id leo dapibus
                tincidunt a vel urna. Donec nulla velit, lacinia ac sollicitudin
                nec, commodo cursus augue. Donec porta eget ante id lobortis.
                Cras tempus quam sit amet venenatis ultricies. Nulla
                sollicitudin luctus malesuada. Donec in urna massa. Etiam ac
                diam in augue lacinia tincidunt at eget risus. Nullam ac
                fermentum ante. Vestibulum ante ipsum primis in faucibus orci
                luctus et ultrices posuere cubilia curae;
            </Link>
        </div>
    );
}
