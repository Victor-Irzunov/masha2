import { Button, Divider } from 'antd';
import { FormOutlined, PhoneOutlined } from '@ant-design/icons';
import Link from 'next/link';
import { OnlineMainPageSection } from '../components/onlineMainPage/OnlineMainPageSection';
import { SectionFormMainPage } from '../components/formSectionMainPage/SectionFormMainPage';
import { ContentSection } from '../components/contentSection/ContentSection';
import Image from 'next/image';
import dynamic from 'next/dynamic';
import BtnCompZapis from '../components/btn/BtnCompZapis';
const SliderComp = dynamic(() => import('../components/slider/SliderComp'));
const BtnMenuNavigate = dynamic(() => import('../components/btnMenuNavigateMainPage/BtnMenuNavigate'));
const QuestionsMainPage = dynamic(() => import('../components/questionsMainPage/QuestionsMainPage'));
const TntVideoBlock = dynamic(() => import('../components/tnt/TntVideoBlock'));
const SectionMainPage = dynamic(() => import('../components/sectionMainPage/SectionMainPage'));
// const FotoInfoMainPage = dynamic(() => import('../components/fotoInfoMainPage/FotoInfoMainPage'));
const ObratiliVnimanieBlock = dynamic(() => import('../components/obratiliVnimanieMainPage/ObratiliVnimanieBlock'));

const Home = () => {
  return (
    <section className='mt-6 overflow-hidden pt-8'>
      <div
        className='sd:px-10 xyy:px-5'
      >
        <div className=''>
          <h1
            className='text-[#191c1d] sd:text-8xl xyy:text-5xl font-semibold'>
            Психолог
            <span className='text-white'>
              {' '}в Минске
            </span>
          </h1>

          <h2 className='mt-5 sd:text-3xl xyy:text-xl'>
            Ирзунова Мария
          </h2>

          <div className='flex flex-col sd:flex-row sd:mt-16'>
            <div
              className='sd:hidden flex-shrink-0 sd:pr-8 xyy:pr-0 rounded-md sd:order-1 xyy:my-8 sd:my-0'
            >
              <Image
                src='/images/main/main.webp'
                alt='Психолог в Минске Ирзунова Мария'
                width={370}
                height={370}
                className='rounded-md shadow-md'
                loading="eager"
              />
            </div>
            <div className='flex-grow sd:order-2'>
              <p className='leading-6 tracking-wide font-light sd:text-base xyy:text-sm text-justify'>
                Здравствуйте, меня зовут Мария Ирзунова. Я клинический и перинатальный психолог с медицинским образованием, Член Международной Ассоциации Психологов, Член Российской Ассоциации Психологов, работаю в сети клиник «Evaclinic” репродуктивного здоровья и ВРТ, провожу частные консультации в личном кабинете в г.Минске и по всему Миру онлайн более 9 лет, пишу статьи для крупных изданий, автор оффлайн курса для беременных, участвую в волонтерских проектах.
              </p>
              <p className='mt-6 mb-2'>
                Мои принципы в работе:
              </p>
              <ul className='font-light sd:text-base xyy:text-sm'>
                <li className='mb-1'>
                  1. Соблюдение конфиденциальности.
                </li>
                <li className='mb-1'>
                  2. Не вмешиваюсь, если нет необходимости.
                </li>
                <li className='mb-1'>
                  3. Упрощение, а не усложнение.
                </li>
                <li className='mb-1'>
                  4. Приоритет опыта клиента в терапии.
                </li>
                <li className='mb-1'>
                  5. Маленькие шаги вперёд всегда предпочтительнее застоя.
                </li>
                <li className='mb-1'>
                  6. Гибкость стратегии: если не работает — выбираю другую.
                </li>
                <li className='mb-1'>
                  7. Значимость теории до тех пор, пока она приносит улучшения.
                </li>
                <li className='mb-1'>
                  8. Использование лучших методик с научно подтвержденной эффективностью, с комбинированием для достижения оптимальных результатов.
                </li>
                <li className='mb-1'>
                  9. Индивидуальный подход к каждому клиенту, без строгих протоколов.
                </li>
              </ul>

              <p className='mt-3 sd:text-base xyy:text-sm'>
                Многие из моих клиентов делятся моими контактами с близкими и друзьями, что, на мой взгляд, лучше всего отражает эффективность моей работы. Позвольте мне быть вашим проводником к психологическому благополучию.
              </p>
            </div>
          </div>
        </div>
        <div className='w-full flex justify-around mt-20 xy:items-center xx:items-center sd:items-start xx:flex-col xyy:flex-col sd:flex-row'
        >
          <div className='mb-5 bg-[#65a30c] rounded-3xl sd:px-6 xyy:px-3 py-3 font-bold'>
            <BtnCompZapis conclusion />
          </div>
          <div className='z-10'>
            <BtnMenuNavigate />
          </div>
        </div>
        <div
          className='mt-8 text-center '>
          <SliderComp />
        </div>
      </div>
      <SectionMainPage />
      <Divider />
      <QuestionsMainPage />
      {/* <FotoInfoMainPage /> */}
      <TntVideoBlock />
      <ObratiliVnimanieBlock />
      <OnlineMainPageSection />
      <ContentSection />
      <SectionFormMainPage />
      <a href='tel:80298884002'>
        <div className='z-50 fixed bottom-[100px] right-3 bg-black w-16 h-16 rounded-full flex justify-center items-center'>
          <PhoneOutlined
            className='text-white text-3xl animate-pulse'
          />
        </div>
      </a>
      {/* <FloatButton.BackTop /> */}
    </section>
  )
}
export default Home;
