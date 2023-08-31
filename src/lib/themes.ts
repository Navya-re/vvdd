export enum InstanceClass {
	man = 'Man',
	woman = 'Woman',
	youngmale = 'youngmale',
	youngfemale = 'youngfemale',
	cat = 'Cat'
}

export interface Theme {
	name: string;
	prompt: string;
	instance_classes: InstanceClass[];
}

export const prompts: Theme[] = [
	{
		name: 'pixar character',
		instance_classes: [],
		prompt:
			'realistic closeup portrait of @me as a jedi , highly detailed, science fiction, star wars concept art, intricate details, bright colors, golden hour, art by marko djurdjevic, greg rutkowski, wlop, fredperry, digital painting, rossdraws.'
	}
];

export const getThemes = (instanceClass: string | null) =>
	prompts.filter((item) => !item.instance_classes.includes(instanceClass as InstanceClass));

export const getTheme = (theme: string) => prompts.find((item) => item.name == theme);

export const getPrompt = (name: string) => prompts.find((prompt) => prompt.name == name)?.prompt;
