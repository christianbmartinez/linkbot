import { Button } from '../ui/button'

const CardSocialTraffic = () => {
  return (
    <>
      <div className='relative mb-6 flex w-full min-w-0 flex-col break-words rounded bg-slate-800 shadow-lg'>
        <div className='mb-0 rounded-t border-0 px-4 py-3'>
          <div className='flex flex-wrap items-center'>
            <div className='relative w-full max-w-full flex-1 flex-grow px-4'>
              <h3 className='text-base font-semibold text-zinc-100'>
                Social traffic
              </h3>
            </div>
            <div className='relative w-full max-w-full flex-1 flex-grow px-4 text-right'>
              <Button>See All</Button>
            </div>
          </div>
        </div>
        <div className='block w-full overflow-x-auto'>
          {/* Projects table */}
          <table className='w-full border-collapse items-center bg-transparent'>
            <thead className='thead-light'>
              <tr>
                <th className='whitespace-nowrap border border-l-0 border-r-0 border-solid border-zinc-400 px-6 py-3 text-left align-middle text-xs font-semibold uppercase text-zinc-400'>
                  Referral
                </th>
                <th className='whitespace-nowrap border border-l-0 border-r-0 border-solid border-zinc-400 px-6 py-3 text-left align-middle text-xs font-semibold uppercase text-zinc-400'>
                  Visitors
                </th>
                <th className='min-w-140-px whitespace-nowrap border border-l-0 border-r-0 border-solid border-zinc-400 px-6 py-3 text-left align-middle text-xs font-semibold uppercase text-zinc-400'></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th className='whitespace-nowrap border-l-0 border-r-0 border-t-0 p-4 px-6 text-left align-middle text-xs text-zinc-100'>
                  Pinterest
                </th>
                <td className='whitespace-nowrap border-l-0 border-r-0 border-t-0 p-4 px-6 align-middle text-xs text-zinc-200'>
                  2,280
                </td>
                <td className='whitespace-nowrap border-l-0 border-r-0 border-t-0 p-4 px-6 align-middle text-xs'>
                  <div className='flex items-center'>
                    <span className='mr-2 text-zinc-200'>60%</span>
                    <div className='relative w-full'>
                      <div className='flex h-2 overflow-hidden rounded bg-red-200 text-xs'>
                        <div
                          style={{ width: '60%' }}
                          className='flex flex-col justify-center whitespace-nowrap bg-red-500 text-center text-white shadow-none'
                        ></div>
                      </div>
                    </div>
                  </div>
                </td>
              </tr>
              <tr>
                <th className='whitespace-nowrap border-l-0 border-r-0 border-t-0 p-4 px-6 text-left align-middle text-xs text-zinc-100'>
                  Facebook
                </th>
                <td className='whitespace-nowrap border-l-0 border-r-0 border-t-0 p-4 px-6 align-middle text-xs text-zinc-200'>
                  3,480
                </td>
                <td className='whitespace-nowrap border-l-0 border-r-0 border-t-0 p-4 px-6 align-middle text-xs'>
                  <div className='flex items-center'>
                    <span className='mr-2 text-zinc-200'>20%</span>
                    <div className='relative w-full'>
                      <div className='flex h-2 overflow-hidden rounded bg-blue-200 text-xs'>
                        <div
                          style={{ width: '20%' }}
                          className='flex flex-col justify-center whitespace-nowrap bg-blue-500 text-center text-white shadow-none'
                        ></div>
                      </div>
                    </div>
                  </div>
                </td>
              </tr>
              <tr>
                <th className='whitespace-nowrap border-l-0 border-r-0 border-t-0 p-4 px-6 text-left align-middle text-xs text-zinc-100'>
                  Google
                </th>
                <td className='whitespace-nowrap border-l-0 border-r-0 border-t-0 p-4 px-6 align-middle text-xs text-zinc-200'>
                  11,280
                </td>
                <td className='whitespace-nowrap border-l-0 border-r-0 border-t-0 p-4 px-6 align-middle text-xs'>
                  <div className='flex items-center'>
                    <span className='mr-2 text-zinc-200'>40%</span>
                    <div className='relative w-full'>
                      <div className='flex h-2 overflow-hidden rounded bg-green-200 text-xs'>
                        <div
                          style={{ width: '40%' }}
                          className='flex flex-col justify-center whitespace-nowrap bg-green-500 text-center text-white shadow-none'
                        ></div>
                      </div>
                    </div>
                  </div>
                </td>
              </tr>
              <tr>
                <th className='whitespace-nowrap border-l-0 border-r-0 border-t-0 p-4 px-6 text-left align-middle text-xs text-zinc-100'>
                  Instagram
                </th>
                <td className='whitespace-nowrap border-l-0 border-r-0 border-t-0 p-4 px-6 align-middle text-xs text-zinc-200'>
                  12,280
                </td>
                <td className='whitespace-nowrap border-l-0 border-r-0 border-t-0 p-4 px-6 align-middle text-xs'>
                  <div className='flex items-center'>
                    <span className='mr-2 text-zinc-200'>50%</span>
                    <div className='relative w-full'>
                      <div className='flex h-2 overflow-hidden rounded bg-pink-200 text-xs'>
                        <div
                          style={{ width: '50%' }}
                          className='flex flex-col justify-center whitespace-nowrap bg-pink-500 text-center text-white shadow-none'
                        ></div>
                      </div>
                    </div>
                  </div>
                </td>
              </tr>
              <tr>
                <th className='whitespace-nowrap border-l-0 border-r-0 border-t-0 p-4 px-6 text-left align-middle text-xs text-zinc-100'>
                  LinkedIn
                </th>
                <td className='whitespace-nowrap border-l-0 border-r-0 border-t-0 p-4 px-6 align-middle text-xs text-zinc-200'>
                  1,280
                </td>
                <td className='whitespace-nowrap border-l-0 border-r-0 border-t-0 p-4 px-6 align-middle text-xs'>
                  <div className='flex items-center'>
                    <span className='mr-2 text-zinc-200'>80%</span>
                    <div className='relative w-full'>
                      <div className='flex h-2 overflow-hidden rounded bg-cyan-200 text-xs'>
                        <div
                          style={{ width: '80%' }}
                          className='flex flex-col justify-center whitespace-nowrap bg-cyan-500 text-center text-white shadow-none'
                        ></div>
                      </div>
                    </div>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  )
}

export default CardSocialTraffic
