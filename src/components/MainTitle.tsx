import { Flex, Text, Input, Button } from '@chakra-ui/react';
import React from 'react';

type MainTitleProps = {
	setCount: (count: string) => void;
	title: string;
};

const MainTitle = ({ setCount, title }: MainTitleProps) => {
	const [localCount, setLocalCount] = React.useState('');

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) =>
		setLocalCount(event.target.value);

	const handleClick = () => setCount(localCount);

	return (
		<Flex
			flexDirection="column"
			width="100%"
			justifyContent="center"
			gap="10px"
		>
			<Text fontFamily="subHeading">{title}</Text>
			<Flex flexDirection="row" gap="10px">
				<Input
					width="75%"
					height="30px"
					value={localCount}
					onChange={handleChange}
					placeholder="참여할 인원 수를 입력해주세요"
				/>
				<Button onClick={handleClick}>저장</Button>
			</Flex>
		</Flex>
	);
};

export default MainTitle;
