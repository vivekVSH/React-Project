import React from 'react'
import { useState } from 'react';

const App = () => {

  const[title , setTitle] = useState('');
  const [details, setDetails] = useState('')
  const [task, setTask] = useState([])

  function submitHandeler(e){
    e.preventDefault();
    console.log('Form is Submitted!!');
    const copyTask = [...task];
    copyTask.push({title,details});
    setTask(copyTask);
    
    setTitle('');
    setDetails('');
  }

  const notesDelete = (idx) => {
    console.log('note is deleted!!');
    const copyTask = [...task];
    copyTask.splice(idx,1);
    setTask(copyTask);
  }

  return (
    <div className='min-h-screen bg-neutral-900 text-white'>
      {/* container: stack on small, side-by-side on md+ */}
      <div className="flex flex-col md:flex-row h-full">

        {/* LEFT: Add Notes */}
        <section className="md:w-1/2 w-full p-8 md:p-12 flex items-start border-b md:border-b-0 md:border-r border-gray-800">
          <form
            onSubmit={submitHandeler}
            className='w-full max-w-xl mx-auto bg-gradient-to-br from-white/3 to-white/5 rounded-2xl p-6 md:p-8 shadow-lg backdrop-blur-sm border border-white/10'
          >
            <h1 className='text-3xl md:text-4xl font-extrabold mb-4'>Add Notes</h1>

            <label className="block text-sm text-gray-300 mb-2">Heading</label>
            <input
              type="text"
              className='px-4 py-3 w-full outline-none border border-white/10 rounded-md bg-transparent placeholder:text-gray-400 text-white transition-shadow focus:shadow-[0_6px_18px_rgba(255,255,255,0.03)]'
              placeholder='Enter Heading'
              value={title}
              onChange={(e) =>{
                setTitle(e.target.value);
              }}
            />

            <label className="block text-sm text-gray-300 mt-4 mb-2">Details</label>
            <textarea
              type="text"
              className='px-4 py-3 w-full h-40 resize-none outline-none border border-white/10 rounded-md bg-transparent placeholder:text-gray-400 text-white transition-shadow focus:shadow-[0_6px_18px_rgba(255,255,255,0.03)]'
              placeholder='Write Details'
              value={details}
              onChange={(e) => {
                setDetails(e.target.value)
              }}
            />

            <div className="mt-6 flex items-center gap-3">
              <button
                className='flex-1 bg-white text-black font-semibold py-3 rounded-lg shadow hover:scale-[0.995] active:scale-95 transition-transform'
                aria-label="Add note"
              >
                Add Notes
              </button>

              <button
                type="button"
                onClick={() => { setTitle(''); setDetails(''); }}
                className='px-4 py-3 border border-white/10 rounded-lg text-sm text-gray-200 hover:bg-white/3 transition'
              >
                Clear
              </button>
            </div>

            <p className="mt-4 text-xs text-gray-400">Tip: Use a short title and detailed description for better results.</p>
          </form>
        </section>

        {/* RIGHT: Your Notes */}
        <section className="md:w-1/2 w-full p-8 md:p-12 overflow-auto">
          <div className='max-w-3xl mx-auto'>
            <h1 className='text-3xl md:text-4xl font-extrabold mb-6'>Your Notes</h1>

            {/* Empty state */}
            {task.length === 0 && (
              <div className="p-8 rounded-2xl border border-dashed border-white/8 bg-white/2 text-gray-300">
                <p className="mb-2">No notes yet — add your first note using the form.</p>
                <p className="text-sm text-gray-400">Notes will appear here as cards with a background image and quick actions.</p>
              </div>
            )}

            {/* notes grid */}
            <div className='mt-6 grid grid-cols-1 gap-6'>
              {task.map(function(elem, idx) {
                return (
                  <article
                    key={idx}
                    className="relative overflow-hidden rounded-2xl h-40 md:h-36 bg-cover bg-center shadow-lg"
                    style={{
                      backgroundImage: "linear-gradient(180deg, rgba(0,0,0,0.25), rgba(0,0,0,0.45)), url('https://tse3.mm.bing.net/th/id/OIP.ml-0nJvdLK9oxf1KJlW83gHaHM?cb=ucfimg2&ucfimg=1&rs=1&pid=ImgDetMain&o=7&rm=3')"
                    }}
                  >
                    {/* content */}
                    <div className="absolute inset-0 p-5 flex flex-col justify-between text-white">
                      <div>
                        <h3 className="text-lg md:text-xl font-bold line-clamp-2">{elem.title || 'Untitled'}</h3>
                        <p className="text-sm md:text-sm mt-2 line-clamp-3 text-white/90">{elem.details || 'No details provided'}</p>
                      </div>

                      <div className="flex items-center justify-between">
                        <span className="text-xs text-white/80">Created just now</span>

                        <div className="flex items-center gap-2">
                          <button
                            onClick={() => { notesDelete(idx); }}
                            className='px-3 py-1 rounded-md bg-red-500 text-white text-sm font-medium hover:opacity-90 active:scale-95 transition'
                            aria-label={`Delete note ${idx + 1}`}
                          >
                            Delete
                          </button>
                        </div>
                      </div>
                    </div>
                  </article>
                )
              })}
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default App;
