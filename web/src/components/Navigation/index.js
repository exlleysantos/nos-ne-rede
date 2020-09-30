import React, { useState } from 'react';
import Avatar from 'react-avatar';
import { Link, useLocation } from 'react-router-dom';
import { Collapse } from 'react-collapse';

import { Container, PicContainer, Menu, LinkItem, Forums, Forum, collapseTheme } from './styles';

import { CgProfile } from 'react-icons/cg';
import { AiOutlinePlayCircle, AiOutlineLogout } from 'react-icons/ai';
import { HiOutlineChatAlt } from 'react-icons/hi';
import { GoBook } from 'react-icons/go';
import { FiShare2 } from 'react-icons/fi';
import { BiChevronDown } from 'react-icons/bi';

const Navigation = () => {
	const { pathname } = useLocation();

	const [showForums, setShowForums] = useState(() => {
		return pathname.includes('forums') ? true : false;
	});

	return (
		<Container>
			<PicContainer>
				<Avatar round='5px' name='Jane Wilson' />
				<div>
					<p>Jane Wilson</p>
					<span>@janewilson</span>
				</div>
			</PicContainer>

			<Menu>
				<Link to={{ pathname: '/profile', state: { from: pathname } }}>
					<LinkItem active={pathname.includes('profile')}>
						<CgProfile /> Meu espaço
					</LinkItem>
				</Link>

				<Link to={{ pathname: '/educators', state: { from: pathname } }}>
					<LinkItem active={pathname.includes('educator')}>
						<GoBook /> Educadores em Rede
					</LinkItem>
				</Link>

				<Link to={{ pathname: '/educators', state: { from: pathname } }}>
					<LinkItem active={pathname.includes('educator')}>
						<AiOutlinePlayCircle /> (Auto) Formação continuada
					</LinkItem>
				</Link>

				<LinkItem
					onClick={() => setShowForums(!showForums)}
					active={pathname.includes('forums')}>
					<HiOutlineChatAlt /> Vamos conversar
					<BiChevronDown className={`${showForums ? 'rotate' : ''} chevron`} />
				</LinkItem>

				<Collapse isOpened={showForums} theme={collapseTheme}>
					<Forums>
						<Link to={{ pathname: '/forums/', state: { from: pathname } }}>
							<Forum>Início</Forum>
						</Link>
						<Link to={{ pathname: '/forums/', state: { from: pathname } }}>
							<Forum>Eu tenho uma dúvida</Forum>
						</Link>
						<Link to={{ pathname: '/forums/', state: { from: pathname } }}>
							<Forum>Foi uma experiência prazerosa</Forum>
						</Link>
						<Link to={{ pathname: '/forums/', state: { from: pathname } }}>
							<Forum>Curiosidades sobre TDIC</Forum>
						</Link>
					</Forums>
				</Collapse>

				<Link to={{ pathname: '/share', state: { from: pathname } }}>
					<LinkItem active={pathname.includes('share')}>
						<FiShare2 /> Compartilhe
					</LinkItem>
				</Link>

				<LinkItem>
					<AiOutlineLogout /> Sair
				</LinkItem>
			</Menu>
		</Container>
	);
};

export default Navigation;
