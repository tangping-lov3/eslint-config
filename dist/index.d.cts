import * as eslint_flat_config_utils from 'eslint-flat-config-utils';
import * as _antfu_eslint_config from '@antfu/eslint-config';
import { antfu } from '@antfu/eslint-config';

type AntfuParams = Parameters<typeof antfu>;
declare function defineEslintConfig(options?: AntfuParams[0] & {
    autoImport?: boolean | string;
    prettier?: boolean;
}, ...rest: AntfuParams[1][]): eslint_flat_config_utils.FlatConfigComposer<_antfu_eslint_config.TypedFlatConfigItem, _antfu_eslint_config.ConfigNames>;

export { defineEslintConfig as default, defineEslintConfig };
