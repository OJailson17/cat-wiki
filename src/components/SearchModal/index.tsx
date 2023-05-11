import * as Dialog from '@radix-ui/react-dialog';
import React from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { SearchModalContent } from './SearchModalContent';

export const SearchModal = () => {
	return (
		<Dialog.Portal>
			<Dialog.Overlay className='bg-black opacity-70 fixed inset-0' />
			<Dialog.Content className='w-[90%] max-w-[340px] px-4 pb-9 bg-white fixed top-10 left-1/2 -translate-x-1/2 rounded-xl'>
				<Dialog.Close className=' w-10 h-10 fixed right-2 mt-2 flex items-center justify-center'>
					<AiOutlineClose size={20} />
				</Dialog.Close>

				<SearchModalContent />
			</Dialog.Content>
		</Dialog.Portal>
	);
};
