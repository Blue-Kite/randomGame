import { Flex, Text, Input } from '@chakra-ui/react';

type MainTitleProps = {
	count: string;
	setCount: (count: string) => void;
	title: string;
};

const MainTitle = ({ count, setCount, title }: MainTitleProps) => {
	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) =>
		setCount(event.target.value);

	return (
		<Flex
			flexDirection="column"
			width="100%"
			justifyContent="center"
			gap="10px"
		>
			<Text fontFamily="subHeading">{title}</Text>
			<Input
				width="75%"
				height="30px"
				value={count}
				onChange={handleChange}
				placeholder="참여할 인원 수를 입력해주세요"
			/>
		</Flex>
	);
};

export default MainTitle;
