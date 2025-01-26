import styles from './ArtForFunStyles.module.css';
import ArtTile from '../../common/ArtTile';
import abstract from '../../assets/art-abstract.png';
import cat from '../../assets/art-cat.png';
import flower from '../../assets/art-flower.png';
import lake from '../../assets/art-lake.png';
import mountain from '../../assets/art-mountain.png';
import paris from '../../assets/art-paris.png';


function ArtForFun() {
    return (
        <section id="artTiles" className={styles.container}>
            <h1 className="sectionTitle">Art For Fun</h1>
            <div className="rowOne">
                <ArtTile
                    src={flower}
                />
                <ArtTile
                    src={cat}
                />
            </div>
            <div className='rowTwo'>
                <ArtTile
                    src={mountain}
                />
                <ArtTile
                    src={abstract}
                />
            </div>
            <div className='rowThree'>
                <ArtTile
                    src={lake}
                />
                <ArtTile
                    src={paris}
                />
            </div>
        </section>       
    );
  }
  
  export default ArtForFun;
  