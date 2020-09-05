import React from 'react'
import { FiChevronRight } from 'react-icons/fi'

import logoImg from '../../assets/logo.svg'

import { Titulo, Form, Repositories } from './styles'

const Dashboard: React.FC = () => {
    return (
        <>
            <img src={logoImg} alt="Github Explorer" />
            <Titulo>Explore repositórios no Github</Titulo>

            <Form>
                <input placeholder="Digite o nome do repositório" />
                <button type="submit">Pesquisar</button>
            </Form>

            <Repositories>
                <a href="teste">
                    <img
                        src="https://avatars1.githubusercontent.com/u/37482325?s=460&u=21082310a42dc805cefd25c8ad863744aa94b996&v=4"
                        alt="J-Eugenio"
                    />
                    <div>
                        <strong>J-Eugênio</strong>
                        <p>A Software / Technology Hobbyist / Enthusiast.</p>
                    </div>

                    <FiChevronRight size={20} />
                </a>

                <a href="teste">
                    <img
                        src="https://avatars1.githubusercontent.com/u/37482325?s=460&u=21082310a42dc805cefd25c8ad863744aa94b996&v=4"
                        alt="J-Eugenio"
                    />
                    <div>
                        <strong>J-Eugênio</strong>
                        <p>A Software / Technology Hobbyist / Enthusiast.</p>
                    </div>

                    <FiChevronRight size={20} />
                </a>

                <a href="teste">
                    <img
                        src="https://avatars1.githubusercontent.com/u/37482325?s=460&u=21082310a42dc805cefd25c8ad863744aa94b996&v=4"
                        alt="J-Eugenio"
                    />
                    <div>
                        <strong>J-Eugênio</strong>
                        <p>A Software / Technology Hobbyist / Enthusiast.</p>
                    </div>

                    <FiChevronRight size={20} />
                </a>
            </Repositories>
        </>
    )
}

export default Dashboard