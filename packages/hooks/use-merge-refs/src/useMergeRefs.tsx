import { LegacyRef, MutableRefObject, RefCallback, useMemo } from 'react'

export type ReactRef<T> = RefCallback<T> | MutableRefObject<T> | LegacyRef<T>

export function assignRef<T = any>(ref: ReactRef<T> | null | undefined, value: T) {
  if (ref == null) {
    return
  }

  if (typeof ref === 'function') {
    ref(value)

    return
  }

  try {
    ;(ref as MutableRefObject<T | null>).current = value
  } catch (error) {
    console.log('value', ref)
    throw new Error(`Cannot assign value '${value}' to ref '${ref}'`)
  }
}

export function mergeRefs<T = any>(
  ...refs: (MutableRefObject<T> | LegacyRef<T> | null | undefined)[]
): RefCallback<T> {
  return value => {
    refs.forEach(ref => assignRef(ref, value))
  }
}

export function useMergeRefs<T = any>(...refs: (ReactRef<T> | null | undefined)[]) {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  return useMemo(() => mergeRefs(...refs), refs)
}
