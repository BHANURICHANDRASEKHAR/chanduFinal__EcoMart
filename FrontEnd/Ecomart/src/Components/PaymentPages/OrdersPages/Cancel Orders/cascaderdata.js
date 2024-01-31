const cascaderdata=[
    {
        key:1,
        label:'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        value:'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',

    },
    {key:2,
        label:'Vivamus facilisis lacus eu sapien imperdiet, nec iaculis enim hendrerit.',
        value:'Vivamus facilisis lacus eu sapien imperdiet, nec iaculis enim hendrerit..',

    }
    ,
    {key:3,
        label:'Cras vestibulum justo ut dui euismod, quis porta turpis porttitor..',
        value:'Cras vestibulum justo ut dui euismod, quis porta turpis porttitor.',

    }
    , {key:4,
        label:'Mauris et metus vel lorem viverra venenatis.',
        value:'Mauris et metus vel lorem viverra venenatis',

    }
    , {
        key:5,
        label:'Donec iaculis nisl quis laoreet volutpat..',
        value:'Donec iaculis nisl quis laoreet volutpat..',

    }
]
export default cascaderdata;
export function datavalidation(data,setError)
{
    if(data.reason.trim()==='' && data.feedback.trim()==='')
    {
        setError('Please fill the All the Required Fields');
        return false;
    }
    return true;
}