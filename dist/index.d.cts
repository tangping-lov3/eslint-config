import * as eslint_flat_config_utils from 'eslint-flat-config-utils';
import * as _antfu_eslint_config from '@antfu/eslint-config';
import _antfu_eslint_config__default from '@antfu/eslint-config';

type AntfuParams = Parameters<typeof _antfu_eslint_config__default>;
declare function tony(options?: AntfuParams[0] & {
    autoImport?: boolean | string;
}, ...rest: AntfuParams[1][]): eslint_flat_config_utils.FlatConfigComposer<_antfu_eslint_config.TypedFlatConfigItem, _antfu_eslint_config.ConfigNames>;

export = tony;
