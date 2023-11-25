import {React} from "react";
import buldozer from '../../img/Services/bulldozer.svg'
import repair from '../../img/Services/repair.svg'
import computer from '../../img/Services/computer.svg'
import './services.css'

const Services = () => {
    return (
        <div className='services bold' id='part2'>
            <div className='services-container'>
                <h2 className={'services-container-h2'}>Компьютерная диагностика</h2>
                <p className={'services-container-p'}> - Мы осуществляем выездную компьютерную диагностику грузовых, легковых автомобилей, спецтехники</p>
                <p className={'services-container-p'}> - Диагностику по OBD DIESEL OBD, OBDII</p>
                <p className={'services-container-p'}> - Специальные функции для обслуживание систем автомобилей таких как: A/T RESET, ABS EXHAUST, BATTERY MATCH, CKP LEARNING, DPF, ECU PROGRAM, ECU RESET, EPB, EXPERIMENT, IRAN SMART KEY, LAMP ADAPTION, ODOMETER, SAS, SERVICE RESET, SMARTKEY PROGRAM, SRS RESET, SUSPENSION, THROTTLE RESET, TPMS, WINDOWS</p>
                <p className={'services-container-p'}> - Программирование ECU BOSCH, DELPHI, DENSO</p>
                <p className={'services-container-p'}> - Калибровка систем CHAOCHAI EOL, HTC EOL, KMS EOL, RENAULT EOL, SHANGCHAI EOL, WEICHAI EOL, XICHAI EOL, YUCHAI EOL</p>
                <p className={'services-container-p'}> - Обслуживание СИСТЕМ ABS + КПП: WABCO, ALLISON, ALLISON-T, BENDIX, BENDIX-A, BOSCH, DELPHI, DENSO, EATON, EATON-T, HALDEX, HALDEX-A, NANYUE, UNITPUMP, VOITH, WABASH, WABASH-A, WABCO-A, XINFENG, ZF, ZF-T</p>
                <p className={'services-container-p'}> - Обслуживание систем SCR DINEX SCR</p>
                <img src={computer} width={'80px'} height={'80px'}/>
            </div>

            <div className='services-container'>
                <h2 className={'services-container-h2'} >Ремонт</h2>
                <p className={'services-container-p'}>Кроме того оказываем услуги по ремонту:</p>
                <p className={'services-container-p'}> - Ремонт автомобильной электроники.</p>
                <p className={'services-container-p'}> - Ремонт рукавов высокого давления.</p>
                <p className={'services-container-p'}> - Ремонт шлангов ГУР (Гидроусилителя руля) всех марок авто.</p>
                <p className={'services-container-p'}> - Ремонт шлангов кондиционера всех марок авто.</p>
                <p className={'services-container-p'}> - Ремонт шлангов компрессоров грузовых авто (Камаз, Маз, MAN, Volvo, DAF, Mercedes, Renault, Shaanxi)</p>
                <p className={'services-container-p'}> - Ремонт шлангов АКПП всех марок авто.</p>
                <p className={'services-container-p'}> Отправка и доставка продукции по всей России</p>
                <img src={repair} width={'80px'} height={'80px'}/>
            </div>
            <div className='services-container'>
                <h2 className={'services-container-h2'}>РВД</h2>
                <p className={'services-container-p'}>У нас вы можете приобрести:</p>
                <p className={'services-container-p'}> - Рукава Высокого Давления (РВД) (5,0-1300,0 Атм) и Рукава Низкого Давления (РНД, шлаги) с любыми присоединительными размерами концевых элементов</p>
                <p className={'services-container-p'}> - Рукава Высокого Давления (РВД) для всех видов спецтехники (экскаваторов, бульдозеров, грейдеров, погрузчиков, манипуляторов, и другие) марок (JCB, Doosan, Liebherr, Sany, XCMG, Volvo, Hitachi, John Deere, Komatsu, Caterpillar, …)</p>
                <p className={'services-container-p'}> - Рукава Высокого Давления (РВД) для буровых установок.</p>
                <p className={'services-container-p'}> - Рукава Высокого Давления (РВД) для покрасочных автоматов и всех видов автомоек (моек высокого давления, моек самообслуживаний) различных производителей (Karcher, Portotecnica, Mix, Hawk, Interpump, Comet, Aquamatic, и другие)</p>
                <p className={'services-container-p'}> - Сопутствующие товары: краны высокого давления, быстроразъёмные соединения (БРС) (ISO-A, Flat Face, HPA,и другие), адаптеры, тройники, резиновые кольца, защита для РВД, хомуты, </p>
                <img src={buldozer} width={'80px'} height={'80px'}/>
            </div>
        </div>
    )
}

export default Services;
