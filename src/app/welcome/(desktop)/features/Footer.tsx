'use client';

import { useTheme } from 'antd-style';
import { Book, Github } from 'lucide-react';
import { memo } from 'react';
import { Flexbox } from 'react-layout-kit';

import { GITHUB, WIKI } from '@/const/url';

const Footer = memo(() => {
  const theme = useTheme();

  return (
    <Flexbox align={'center'} horizontal justify={'space-between'} style={{ padding: 16 }}>
      <span style={{ color: theme.colorTextDescription }}>
        ©{new Date().getFullYear()} LobeHub
      </span>
      <Flexbox horizontal>
        <ActionIcon
          icon={Book}
          onClick={() => window.open(WIKI, '__blank')}
          size={'site'}
          title={'Wiki'}
        />
        <ActionIcon
          icon={Github}
          onClick={() => window.open(GITHUB, '__blank')}
          size={'site'}
          title={'GitHub'}
        />
      </Flexbox>
    </Flexbox>
  );
});

export default Footer;
