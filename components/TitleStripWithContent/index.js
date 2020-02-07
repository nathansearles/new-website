import Wrapper from 'components/Wrapper';
import { Textfit } from 'react-textfit';
import s from './style.css';

export default function TitleStripWithContent({ title, subtitle, children }) {
  return (
    <div className={s.root}>
      <Wrapper>
        <div className={s.rootInner}>
          <Textfit className={s.title} mode="multi" min={20} max={60}>
            {title}
          </Textfit>
          {subtitle && <div className={s.subtitle}>{subtitle}</div>}
        </div>
        <div className={s.content}>{children}</div>
      </Wrapper>
    </div>
  );
}
