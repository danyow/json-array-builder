import * as core from '@actions/core'
import {buildArray} from './builder'
import {execCmd} from './execer'

async function run(): Promise<void> {
  try {
    const str: string = core.getInput('str')
    const cmd: string = core.getInput('cmd')
    const separator: string = core.getInput('separator')
    const json_array: string = core.getInput('json_array')

    let str_to_separate: string
    if (cmd !== '') {
      str_to_separate = await execCmd(cmd)
    } else {
      if (str === '') {
        str_to_separate = str
      } else {
        str_to_separate = '[]'
      }
    }

    const build: string = buildArray(str_to_separate, separator, json_array)
    core.setOutput('build', build)
  } catch (error) {
    core.error(error)
    core.setFailed(error.message)
  }
}

run()
