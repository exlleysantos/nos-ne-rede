import React, { useState } from 'react';

import UserProfile from '../../components/UserProfile';
import Box from '../../components/Box';
import { Container, BioInfos } from './styles';

// import api from '../../services/api';

const Profile = () => {
	const [user] = useState({ name: 'Joca Doido' });

	return (
		<Container>
			<Box>
				<UserProfile data={user} />
			</Box>

			<Box>
				<BioInfos>
					<div>
						<header>
							<h3>Interesses</h3>
						</header>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, in pellentesque
							tempus felis, sociis elit, euismod enim, tincidunt duis.
						</p>
					</div>

					<div>
						<header>
							<h3>Disciplinas que ministra</h3>
						</header>
						<p>Matemática e física.</p>
					</div>

					<div>
						<header>
							<h3>ORCID</h3>

							<button>VER</button>
						</header>
					</div>
				</BioInfos>
			</Box>
		</Container>
	);
};

export default Profile;

// export default function Profile() {
//     const [incidents, setIncidents] = useState([]);
//     const ongId = localStorage.getItem('ongId');
//     const ongName = localStorage.getItem('ongName');
//     const history = useHistory();

//     useEffect(() => {
//         api.get('profile', {
//             headers: {
//                 Authorization: ongId,
//             }
//         }).then(response => {
//             setIncidents(response.data);
//         })
//     }, [ongId]);

//     async function handleDeleteIncident(id){
//         try{
//             await api.delete(`incidents/${id}`, {
//                 headers: {
//                     Authorization: ongId,
//                 }
//             });
//             setIncidents(incidents.filter(incident => incident.id !== id));
//         } catch(err){
//             alert("Não foi possível deletar!");
//         }
//     };

//     function handleLogout(){
//         localStorage.clear();
//         history.push('/');
//     }

//     return (
//         <div className="profile-container">
//             <header>
//                 <img src={logoImg} alt="logo" />
//                 <span>Bem vinda, {ongName}</span>
//                 <Link className="button" to="/incidents/new">
//                     Cadastrar Novo Caso
//                 </Link>
//                 <button type="button" onClick={() => handleLogout()}>
//                     <FaPowerOff size="18" color="#E02041" />
//                 </button>
//             </header>

//             <h1>Casos Cadastrados</h1>

//             <ul>
//                 {incidents.map(incident => (
//                     <li key={incident.id}>
//                         <strong>CASO:</strong>
//                         <p>{incident.title}</p>
//                         <strong>DESCRIÇÃO:</strong>
//                         <p>{incident.description}</p>
//                         <strong>VALOR:</strong>
//                         <p>{Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL'}).format(incident.value)}</p>
//                         <button type="button" onClick={ () => handleDeleteIncident(incident.id)}>
//                             <FaTrash size="20" />
//                         </button>
//                     </li>
//                 ))}
//             </ul>
//         </div>
//     );
// }
